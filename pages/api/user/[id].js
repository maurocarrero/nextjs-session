// https://nextjs.org/docs/api-routes/introduction
const users = [
  { id: 1, name: 'Pedro Acosta' },
  { id: 2, name: 'Martin Palermo' }
];

export default (req, res) => {
  const user = users.find(({ id }) => id === Number(req.query.id));
  res.end(JSON.stringify(user));
};
