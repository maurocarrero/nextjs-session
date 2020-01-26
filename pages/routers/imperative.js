import Router from 'next/router';

const DoSomethingRouter = () => (
  <section>
    <h2>Imperative routing</h2>
    <button onClick={() => Router.push('/')}>Go home</button>
  </section>
);

export default DoSomethingRouter;
