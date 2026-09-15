import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const base = site || new URL('https://otica-pantanal-premium.pages.dev');
  const articles = await getCollection('artigos');
  const paths = ['/', '/sobre-nos', '/contato', '/conteudo', '/politica-de-privacidade', '/politica-de-cookies', '/termos-de-uso', ...articles.map((article) => `/conteudo/${article.id}`)];
  const urls = paths.map((pathname) => `<url><loc>${new URL(pathname, base)}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
