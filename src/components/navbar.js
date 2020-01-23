import Link from 'next/link';
import { ActiveLink } from './active-link';

const NavBar = () => (
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/info">Info</a>
    </li>
    <li>
      <Link href="/info">
        <a>Info client side</a>
      </Link>
    </li>
    <a href="/info/something">Dynamic route</a>
    <li>
      <Link href="/info/[slug]" as="/info/whatever_we_want">
        <a>Dynamic route as whatever we want using next/link "as"</a>
      </Link>
    </li>
    <li>
      <a href="/info/sub/folder/nested">Nested</a>
    </li>
    <li>
      <ActiveLink href="/info">
        An ActiveLink component accessing router with <strong>useRouter</strong>
      </ActiveLink>
    </li>
  </ul>
);

export { NavBar };
