require("dotenv").config();

const hapi = require('hapi');

const server = new hapi.Server();

server.connection({ port: 9090 });

server.route({
    method:'GET',
    path:'/',
    handler: (request,reply) => {
        reply( {data:"hello world"});
    }

});

server.start(err => {
    if (err) throw err;
    console.log( `Servidor levantado en: ${server.info.uri}` );    
})