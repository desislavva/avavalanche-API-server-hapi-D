const Hapi = require('@hapi/hapi');

const dotenv = require('dotenv');
dotenv.config();


const init = async () => {

    const server = Hapi.server({
        port: process.env.SERVER_PORT,
        host: process.env.SERVER_HOST
    });
  
    await server.start();
    console.log('Server running: %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();