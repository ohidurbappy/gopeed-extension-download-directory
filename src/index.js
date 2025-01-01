import {load} from "cheerio";

gopeed.events.onResolve(async function (ctx) {
  
  const response = await fetch(ctx.req.url);
  const html = await response.text();
  
  const $ = load(html)
  
  const links = $('table tr td.fb-n a')
    .filter((_, el) => !$(el).text().includes('Parent Directory'))
    .map((_, el) => ({
      name: $(el).text(),
      req: {
        url: new URL($(el).attr('href'), ctx.req.url).href
      }
    }))
    .get();

  ctx.res = {
    name: new URL(ctx.req.url).pathname.split('/').pop() || 'download',
    files: links
  };
});