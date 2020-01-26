import css from 'styled-jsx/css';
import Link from 'next/link';

const imageJsx = css`
  .image {
    width: 100%;
  }
`;

const HomePage = () => {
  return (
    <section>
      <h1>Custom Server</h1>
      <figure>
        <img className="image" src="/rick-and-morty-wheres-waldo.jpg" />
        <figcaption>Rick and Morty</figcaption>
      </figure>
      <nav>
        <ul>
          <li>
            <Link href="/a">
              <a>Page A</a>
            </Link>
          </li>
          <li>
            <Link href="/b">
              <a>Page B</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{imageJsx}</style>
    </section>
  );
};

export default HomePage;
