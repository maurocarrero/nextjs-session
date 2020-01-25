import { useRouter } from 'next/router';

const SlugPage = () => {
  const { query, asPath } = useRouter();
  return (
    <section>
      <h2>Slug page</h2>
      <p>query {JSON.stringify(query)}</p>
      <p>asPath: {asPath}</p>
      <a href="https://nextjs.org/docs/routing/dynamic-routes">
        Dynamic routes
      </a>
    </section>
  );
};

export default SlugPage;
