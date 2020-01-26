import { Header } from '../src/components/header';

import '../src/styles.css';

function APIRoutesApp({ Component, pageProps }) {
  return (
    <section>
      <Header title={'API routes'}/>
      <Component {...pageProps} />
    </section>
  );
}

export default APIRoutesApp;
