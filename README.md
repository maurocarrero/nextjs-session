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
     - opted in by adding blocking data requirement to the page: *getInitialProps* must be defined.
     
        > ! Higher TTFB (time to first byte)

        > ! NodeJS runtime must be present and has to scale depending on traffic.

- **getInitialProps** (async static method): initial data population.
    - blocks render until resolved.
    - disables *automatic static optimization*.
    - returned value must be a serializable object.
    - will only be executed in the client when changing routes using `next/link` or `next/router`.
    - receives `context` value as a single argument with router information.
    - when present in custom `App` will disable Static optimization.
    - when present in custom `Document`, is needed to check `ctx.req`, it will be `undefined` when statically rendered, otherwise it will be defined.

## Data Fetching
- [Docs - Data fetching](https://nextjs.org/docs/basic-features/data-fetching)
- [SWR - Data fetching library](https://github.com/zeit/swr)

## Routing
- File-system based router built on the concept of pages.
- Index `pages/blog/index.js` → `/blog`) files will be mapped to the root of the folder.
- Nested files/paths supported.
- Dynamic routes segments: brackets syntax [].

### API Routes

- Files inside `pages/api` --> `/api/*` will be treated as **endpoints** instead of pages.
- A **request handler** function must be exported.
    - req: [IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage) + [middlewares](https://nextjs.org/docs/api-routes/api-middlewares)
    - res: [ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)
- Do not specify CORS headers (Same Origin only), can be solved by using [Micro](https://nextjs.org/docs/api-routes/api-middlewares#micro-support)
- Server Side only
- Client-Side route transitions with `next/link` component, as in SPAs. HRef and as can be provided for dynamic routes.
- Injecting the [router object](https://nextjs.org/docs/api-reference/next/router#router-object): [useRouter hook](https://nextjs.org/docs/api-reference/next/router#userouter)(recommended) and [withRouter HoC](https://nextjs.org/docs/api-reference/next/router#withrouter).

#### Dynamic API routes


## Static File Serving

- `public` directory in the root will be referenced as the root of the baseUrl:
    `public/image.png` >> `<img src="/image.png">`
- The folder's name cannot be changed.
- When public asset name and page name collides, the page will be prioritized.

## Styling

#### Global Stylesheet
- Import CSS file from `pages/_app.js` partial component.
- This style will be applied to all pages and components.
- To avoid conflicts, due to its global nature, this stylesheets can only be imported here.
- Hot reload available.
- For `production` all stylesheets are concatenated and minified in one file.

#### Component-level CSS

#### Sass, Less, and Stylus Support

- [@zeit/next-sass](https://github.com/zeit/next-plugins/blob/master/packages/next-sass)
- [@zeit/next-less](https://github.com/zeit/next-plugins/tree/master/packages/next-less)
- [@zeit/next-stylus](https://github.com/zeit/next-plugins/blob/master/packages/next-stylus)

### TypeScript
- [Ignoring TypeScript Errors](https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors)

### Resources

- [Repo](https://github.com/zeit/next.js)
- [Docs](https://nextjs.org/docs)
- [Learn - Basics - Getting Started](https://nextjs.org/learn/basics/getting-started)
- [Plugins](https://github.com/zeit/next-plugins)
- [Static Optimization Indicator](https://nextjs.org/docs/api-reference/next.config.js/static-optimization-indicator)
