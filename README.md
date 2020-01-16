# NextJS
###### Session 28-Jan-2020

Released on October 2016.
Main feature: SSR
Requirement: Node > 10

### What is it?
From [Getting Started](https://nextjs.org/learn/basics/getting-started):

* An intuitive *page-based routing system* (with support for dynamic routes)
* Automatically *statically optimizes* page(s) when possible
* *Server-side renders* page(s) with blocking data requirements
* Automatic *code splitting* for faster page loads
* *Client-side routing* with optimized page prefetching
* *Webpack-based dev environment* which supports *Hot Module Replacement* (HMR)
* API routes to build your API with *serverless functions*, with the same simple router used for pages
* Customizable with *community plugins* and with your own Babel and Webpack configurations

### Goodies
- Automatic compilation and bundling (webpack, babel)
- Hot reloading
- Static generation and SSR (./pages)
- Static file serving (./public)

### Scripts

```js
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
```

————————————————————————

## Pages
[Docs - Pages](https://nextjs.org/docs/basic-features/pages)

- React component
- Route related to its file name

### Pre-rendering
- Built-in concept enabled by default.
- Per page we decide whether to *statically render it at build time* (**Static generation**) or *render it in the server on-demand* (**SSR**).

  1. Static generation
     - generally used for static sites
     - triggered by `next build`
     - pages are pre-rendered as static HTML (automatically optimized) when they don't have blocking data requirements
     - the `.html` output will be served consistently *without changes*

  2. Server-Side Render
     - generally used for frequently updated data and CMS backed pages
     - page is **rendered on-demand** so data is always up-to-date.
     - opted in by adding blocking data requirement to the page: **getInitialProps** must be defined.
     
        > ! Higher TTFB (time to first byte)

        > ! NodeJS runtime must be present and has to scale depending on traffic.

### Resources

- [Repo](https://github.com/zeit/next.js)
- [Docs](https://nextjs.org/docs)
- [Learn - Basics - Getting Started](https://nextjs.org/learn/basics/getting-started)
- [Static Optimization Indicator](https://nextjs.org/docs/api-reference/next.config.js/static-optimization-indicator)