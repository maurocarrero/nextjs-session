import axios from 'axios';
import { useEffect, useState } from 'react';

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
      <div
        style={{
          backgroundColor: '#dedede',
          color: '#343434',
          fontSize: '0.8rem',
          overflowWrap: 'break-word',
          padding: '1rem'
        }}
      >
        {data}
      </div>
      <a href="/ssr">SSR Page</a>
    </section>
  );
};

export default HomePage;
