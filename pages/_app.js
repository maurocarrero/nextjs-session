import { NavBar } from '../src/components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <section>
      <Component {...pageProps} />
      <NavBar />
    </section>
  );
}

export default MyApp;
