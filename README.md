# How to use the design system of Utdanning.no

*Utdanning.no designsystem is still in beta.*

(Some -- all at the moment) packages require authentication. Private NPM packages are published via Github Packages (based on https://andreybleme.com/2020-05-31/hosting-private-npm-packages-for-free).

## How to install:

1. To authenticate, you need a personal access token on Github with the scope: **read:packages**. Use locally in next step.

2. Add this to your "~/.npmrc" local file must look like:

  ```
  registry=https://registry.npmjs.org/
  @utdanningno:registry=https://npm.pkg.github.com/
  //npm.pkg.github.com/:_authToken=YOUR_TOKEN
  ```

3. As long as you have access to the necessary Github repos, you can install the packages (these are already installed in this repo):

  ```sh
  # Base CSS:
  npm i @utdanningno/designsystem-styles
  # Fonts (will include icons soon):
  npm i @utdanningno/designsystem-assets
  # React components:
  npm i @utdanningno/designsystem-react
  ```

  In, e.g., your global CSS:

  ```css
  @import '@utdanningno/designsystem-styles/base.css';
  @import '@utdanningno/designsystem-styles/base-md.css' (min-width: 768px);
  @import '@utdanningno/designsystem-assets/fonts.css';
  ```


---


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
