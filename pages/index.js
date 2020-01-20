import axios from 'axios';
import { useEffect, useState } from 'react';
import css from 'styled-jsx/css';

const imageJsx = css`
  .image {
    width: 100%;
  }
`;

const dataStyle = {
  backgroundColor: '#dedede',
  color: '#343434',
  fontSize: '0.8rem',
  overflowWrap: 'break-word',
  padding: '1rem'
};

const HomePage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api').then(({ data }) => {
      setData(JSON.stringify(data, null, 2));
    });
  }, []);

  return (
    <section>
      <h1>Pre-render: Static Generation</h1>
      <p>This page is automatically optimized at build time.</p>
      <div style={dataStyle}>{data}</div>
      <figure>
        <img className="image" src="/rick-and-morty-wheres-waldo.jpg" />
        <figcaption>Rick and Morty</figcaption>
      </figure>
      <ol>
        <li>
          <a href="/ssr">SSR Page</a>
        </li>
        <li>
          <a href="/swr">Using SWR</a>
        </li>
      </ol>
      <style jsx>{imageJsx}</style>
    </section>
  );
};

export default HomePage;
