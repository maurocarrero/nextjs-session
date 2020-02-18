import Router from 'next/router';
import { withRouter } from 'next/router';

const DoSomethingRouter = ({ router }) => (
  <section>
    <h2>Imperative routing</h2>
    <button onClick={() => Router.push('/')}>Go home</button>
    <button
      onClick={() =>
        Router.push(
          '/routers/imperative?counter=10',
          { auth: null },
          { shallow: true }
        )
      }
    >
      Refresh this page (shallow routing)
    </button>
    <div>Query: {JSON.stringify(router.query)}</div>
  </section>
);

DoSomethingRouter.getInitialProps = async () => {
  console.log('/routers/imperative :: shallow routing');
  return {};
};

export default withRouter(DoSomethingRouter);
