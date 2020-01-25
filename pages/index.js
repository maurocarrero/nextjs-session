import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '../src/components/button';

import css from 'styled-jsx/css';

const imageJsx = css`
  .image {
    width: 100%;
  }
  .error {
    color: red;
    background-color: white;
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
      <h1>Styling</h1>
      <div style={dataStyle}>{data}</div>
      <figure>
        <img className="image" src="/rick-and-morty-wheres-waldo.jpg" />
        <figcaption>Rick and Morty</figcaption>
        <Button />
      </figure>
      <a href="https://nextjs.org/docs/basic-features/built-in-css-support">
        https://nextjs.org/docs/basic-features/built-in-css-support
      </a>
      <style jsx>{imageJsx}</style>
      <style jsx>{`
        figcaption {
          text-align: center;
        }
      `}</style>
    </section>
  );
};

export default HomePage;
