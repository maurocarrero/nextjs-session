// https://nextjs.org/docs/api-routes/api-middlewares
export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      middlewares: {
        'req.cookies': req.cookies,
        'req.query': req.query,
        'req.body': req.body
      }
    })
  );
};
