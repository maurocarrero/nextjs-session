const InfoPage = ({ prop }) => (
  <section>
    <h2>Info page: {prop}</h2>
  </section>
);

InfoPage.getInitialProps = async ctx => {
  console.log('Running Info page getInitialProps :: req', typeof ctx.req);
  return {
    prop: 'initial prop'
  };
};

export default InfoPage;
