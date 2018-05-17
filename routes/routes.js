module.exports = {
  rutas: [{
    method: 'GET',
    path: '/',
    config: {
      handler: (request, reply) => {
        reply({
          data: 'hello world',
        });
      },
    },
  },
  {
    method: 'POST',
    path: '/',
    config: {
      handler: (request, reply) => {
        const parametro = request.payload;
        return reply({
          parametro,
        });
      },
    },
  },
  ],
};
