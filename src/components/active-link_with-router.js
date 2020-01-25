import React from 'react';
import { withRouter } from 'next/router';

// https://nextjs.org/docs/api-reference/next/router#withrouter
class ActiveLinkClassComponent extends React.Component {
  _handleClick = e => {
    e.preventDefault();
    this.props.router.push(this.props.href);
  };

  render() {
    const { children, href, router } = this.props;

    return (
      <a
        href={href}
        onClick={this._handleClick}
        style={{
          marginRight: 10,
          color: router.pathname === href ? 'red' : 'black'
        }}
      >
        {children}
      </a>
    );
  }
}

const ActiveLinkWithRouter = withRouter(ActiveLinkClassComponent);

export { ActiveLinkWithRouter };
