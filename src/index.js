import { load } from 'cheerio';

gopeed.events.onResolve(async function (ctx) {
  const url = ctx.req.url;
  const extensionPattern = /\.[0-9a-z]+$/i;

  if (extensionPattern.test(url)) {
    ctx.res = {
      name: url.split('/').pop(),
      files: [{ name: url.split('/').pop(), req: { url } }],
    };
    return;
  }

  const response = await fetch(url);
  const html = await response.text();

  const $ = load(html);

  const links = $('a[href]')
    .filter((_, el) => extensionPattern.test($(el).attr('href')) && !$(el).text().includes('Parent Directory'))
    .map((_, el) => ({
      name: $(el).text(),
      req: {
        url: new URL($(el).attr('href'), url).href,
      },
    }))
    .get();

  ctx.res = {
    name: new URL(url).pathname.split('/').pop() || 'download',
    files: links,
  };
});
