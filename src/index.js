gopeed.events.onResolve(async function (ctx) {
  const response = await fetch(ctx.req.url);
  const html = await response.text();
  
  // Create a DOM parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  // Get all links from the table
  const links = Array.from(doc.querySelectorAll('table tr td.fb-n a'))
    .filter(link => !link.textContent.includes('Parent Directory'))
    .map(link => ({
      name: link.textContent,
      req: {
        url: new URL(link.getAttribute('href'), ctx.req.url).href
      }
    }));

  ctx.res = {
    name: new URL(ctx.req.url).pathname.split('/').pop() || 'download',
    files: links
  };
});