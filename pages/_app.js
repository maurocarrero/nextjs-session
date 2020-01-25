import { Header } from '../src/components/header';
import { NavBar } from '../src/components/navbar';

import '../src/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <section>
      <Header />
      <Component {...pageProps} />
      <NavBar />
    </section>
  );
}

export default MyApp;
