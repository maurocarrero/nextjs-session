import Link from 'next/link';
import { ActiveLink } from './active-link';
import { ActiveLinkWithRouter } from './active-link_with-router';

const NavBar = () => (
  <aside>
    <h4>Simple anchor</h4>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
    </ul>
    <h4>Nested routes</h4>
    <ul>
      <li>
        <a href="/info/sub/folder/nested">Nested</a>
      </li>
    </ul>
    <h4>Simple anchor and next/link</h4>
    <ul>
      <li>
        <a href="/info">Info</a>
      </li>
      <li>
        <Link href="/info">
          <a>Info (next/link)</a>
        </Link>
      </li>
    </ul>
    <h4>Dynamic routes - slug folders</h4>
    <ul>
      <li>
        <a href="/info/misc">Dynamic route: using a slug or wildcard</a>
      </li>
      <li>
        <a href="/info/different">Different page using /info/different</a>
      </li>
      <li>
        <Link href="/info/[slug]" as="/info/different">
          <a>
            Dynamic route using slug file as /info/different using next/link
            "as"
          </a>
        </Link>
      </li>
      <li>
        <Link href="/info/[slug]" as="/info/whatever_we_want">
          <a>Another dynamic page can be the target of the same path.</a>
        </Link>
      </li>
    </ul>
    <h4>Using useRouter hook and/or withRouter HoC</h4>
    <ul>
      <li>
        <ActiveLink href="/routers/userouter">useRouter</ActiveLink>
      </li>
      <li>
        <ActiveLinkWithRouter href="/routers/withrouter">
          withRouter
        </ActiveLinkWithRouter>
      </li>
    </ul>
    <h4>Imperative routing</h4>
    <ul>
      <li>
        <Link href="/routers/imperative">
          <a>Using `next/router`</a>
        </Link>
      </li>
    </ul>
  </aside>
);

export { NavBar };
