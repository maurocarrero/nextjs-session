import { useState } from 'react';
import fetch from 'isomorphic-unfetch';

const _fetchData = async ({ method = 'GET', path, ...rest }) => {
  let data = {};
  try {
    const response = await fetch(`http://localhost:3000/${path}`, {
      method,
      ...rest
    });
    data = await response.json();
  } catch (err) {
    console.log('err', err);
  }
  return data;
};

const HomePage = ({ data }) => {
  const [d, setData] = useState(data);

  const fetchData = async options => {
    const d = await _fetchData(options);
    setData(d);
  };

  const fetchUserWithId = id => _ => {
    fetchData({
      path: `api/user/${id}`
    });
  };

  const fetchMiddlewares = () => {
    document.cookie = 'nextjs=session';
    fetchData({
      path: 'api/middlewares?k=v',
      method: 'POST',
      body: JSON.stringify({
        content: 'The body of the POST request.'
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  return (
    <section>
      <pre className="data">{JSON.stringify(d, null, 2)}</pre>
      <button onClick={fetchUserWithId(1)}>ID 1</button>
      <button onClick={fetchUserWithId(2)}>ID 2</button>
      <button onClick={fetchMiddlewares}>Middlewares</button>
    </section>
  );
};

HomePage.getInitialProps = async () => {
  const data = await _fetchData({
    path: 'api/user'
  });
  return {
    data
  };
};

export default HomePage;
