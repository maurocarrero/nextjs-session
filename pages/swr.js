import axios from 'axios';
import useSWR from 'swr';

const API_URL = 'https://api.github.com';

const fetcher = async path => {
  const { data } = await axios.get(API_URL + path);
  return data;
};

function UsingSwr() {
  const { data, error } = useSWR('/repos/zeit/next.js', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { avatar_url: avatarUrl = '' } = data ? data.owner : {};

  return (
    <section>
      <h1>Data fetching</h1>
      <h3>
        Client-side using{' '}
        <a href="https://github.com/zeit/swr" target="_blank">
          SWR
        </a>
      </h3>
      {avatarUrl && (
        <figure>
          <img src={avatarUrl} className="avatar" width="230" height="230" />
          <figcaption>Zeit</figcaption>
        </figure>
      )}
      <style jsx>{`
        .avatar {
          height: 115px;
          width: 115px;
        }
      `}</style>
    </section>
  );
}

export default UsingSwr;
