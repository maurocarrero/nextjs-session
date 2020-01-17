const SSRPage = ({ data }) => (
  <section>
    <h1 className="morado">Pre-render: SSR</h1>
    <p>This page is rendered on demand providing last updated data.</p>
    <p>{data}</p>
    <p className="morado">
      {'Styled using '}
      <a target="_blank" href={'https://github.com/zeit/styled-jsx'}>
        styled-jsx
      </a>
      {'.'}
    </p>
    <a href="/">Home</a>
    <style jsx>{`
      .morado {
        color: violet;
      }
    `}</style>
    <style global jsx>{`
      body {
        background: #010101;
        color: #eeeeee;
      }
      .morado {
        color: violet;
      }
    `}</style>
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
