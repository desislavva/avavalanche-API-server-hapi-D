const Hapi = require('@hapi/hapi');

const networkMethods = require('./src/controllers/network');
const blocksMethods = require('./src/controllers/blocks');
const transactionsMethods = require('./src/controllers/transactions');
const addressMethods = require('./src/controllers/address');



const dotenv = require('dotenv');
dotenv.config();


const init = async () => {

        const server = Hapi.server({
        port: process.env.SERVER_PORT,
        host: process.env.SERVER_HOST
    });
  
    await server.start();
    console.log('Server running: %s', server.info.uri);

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello from hapi.js!';
        }
    });
    
    /////////// Network routes ////////////////

    server.route({
        method: 'GET',
        path: '/network',
        handler: async (request, h) => {
            const response = await networkMethods.getNetWorkActivity();
            return { response };
        }
        
    });

    /////////// Blocks routes ////////////////

    server.route({
        method: 'GET',
        path: '/blocks/hash/{hash}',
        handler: async (request, h) => {
            const response = await blocksMethods.getBlockByHash(request);
            return { response };
        }
        
    });

    server.route({
        method: 'GET',
        path: '/blocks/number/{blocknumber}',
        handler: async (request, h) => {
            const response = await blocksMethods.getBlockByNumber(request);
            return { response };
        }
        
    });
    server.route({
        method: 'GET',
        path: '/blocks/numbers/{blocknumber}/{count}',
        handler: async (request, h) => {
            const response = await blocksMethods.getXBlocksFromNthFromCChain(request);
            return { response };
        }
        
    });

    /////////// Transactions routes ////////////////







    /////////// Address routes ////////////////



};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});


init();


