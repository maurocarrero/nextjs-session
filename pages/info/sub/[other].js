import { useRouter } from 'next/router';

const OtherSlugPage = () => {
  const { query } = useRouter();
  return (
    <section>
      <h2>Other Slug page</h2>
      <p>query {JSON.stringify(query)}</p>
    </section>
  );
};

export default OtherSlugPage;
