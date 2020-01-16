const SSRPage = ({ data }) => (
  <section>
    <h1>Pre-render: SSR</h1>
    <p>This page is rendered on demand providing last updated data.</p>
    <p>{data}</p>
    <a href="/">Home</a>
  </section>
);

SSRPage.getInitialProps = async () => {
  const data = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`Data provided by server.`);
    }, 200);
  });

  return {
    data
  };
};

export default SSRPage;
