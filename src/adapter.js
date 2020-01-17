const request = require('request');

const req = url => {
  return new Promise((resolve, reject) => {
    request(
      {
        method: 'GET',
        url
      },
      function(error, _, body) {
        if (error) reject(new Error(error));
        return resolve(JSON.parse(body));
      }
    );
  });
};

export { req as request };
