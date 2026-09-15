# Ótica Pantanal Premium

Site institucional e área de conteúdo da Ótica Pantanal Premium, desenvolvido com Astro e preparado para publicação estática no Cloudflare Pages.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação e build

```bash
npm run build
```

O resultado fica em `dist/`.

## Cloudflare Pages

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Environment variable: `SITE_URL=https://dominio-da-otica.com.br`

O domínio pode continuar registrado na Hostinger. Para usar o domínio principal no Cloudflare Pages, adicione-o ao Cloudflare, troque os nameservers no painel da Hostinger e depois configure o domínio em **Workers & Pages > Custom domains**.
