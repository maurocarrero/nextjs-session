import { useRouter } from 'next/router';

const RoutersPage = () => {
  const { query } = useRouter();

  return (
    <section>
      <h2>Routers page</h2>
      <p>
        {query.type === 'userouter' ? 'useRouter' : 'withRouter'} was used.
      </p>
    </section>
  );
};

export default RoutersPage;
