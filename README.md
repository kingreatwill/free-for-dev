# Free for dev mind map

Source project: https://github.com/ripienaar/free-for-dev

Developers and Open Source authors now have many services offering free tiers, but finding them all takes time to make informed decisions.

This is a list of software (SaaS, PaaS, IaaS, etc.) and other offerings with free developer tiers.

This project is to convert the list into a mind map for easier viewing in an outline format.

## Deploy

[![Deploy with EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?from=github&template=free-for-dev)

[国际站](https://www.tencentcloud.com/)

More Templates: [EdgeOne Pages](https://edgeone.ai/pages/templates)

Live Demo: https://free-for-dev.wcoder.com/

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## GitHub Pages



```
npm install
npm run static
```

> "static": "next build && touch ./out/.nojekyll && echo 'free-for-dev.wcoder.com' > ./out/CNAME"
> 
> _next对于github来说是隐藏目录, 需要添加.nojekyll文件
> 
> 如果需要cname, 可以输出CNAME文件

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
