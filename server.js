const Hapi = require('@hapi/hapi');
const networkMethods = require('./src/controllers/network');



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



};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});


init();


