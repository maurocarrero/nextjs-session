import { request } from '../src/adapter';

const SSRPage = ({ data }) => (
  <section>
    <h1 className="morado">Pre-render: SSR</h1>
    <p>This page is rendered on demand providing last updated data:</p>
    <pre className="data">{data}</pre>
    <p className="morado">
      {'Styled using '}
      <a target="_blank" href={'https://github.com/zeit/styled-jsx'}>
        styled-jsx
      </a>
      {'.'}
    </p>
    <a href="/">Home</a>
    <style jsx>{`
      .data {
        background-color: #dedede;
        color: #343434;
        font-size: 0.8rem;
        overflow-wrap: break-word;
        padding: 1rem;
      }
      .morado {
        color: violet;
      }
    `}</style>
    <style global jsx>{`
      body {
        background: #010101;
        color: #eeeeee;
      }
    `}</style>
  </section>
);

SSRPage.getInitialProps = async () => {
  const data = await request('https://rickandmortyapi.com/api');
  return {
    data: JSON.stringify(data, null, 2)
  };
};

export default SSRPage;
