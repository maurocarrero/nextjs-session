const InfoPage = ({ todo }) => (
  <section>
    <h1>Routing</h1>
    <h2>Info page: {todo}</h2>
  </section>
);

InfoPage.getInitialProps = async () => {
  return {
    todo: 'render in server'
  };
};

export default InfoPage;
