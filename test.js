import {JSDOM} from 'jsdom'

const MYURL="http://172.16.50.14/DHAKA-FLIX-14/SOUTH%20INDIAN%20MOVIES/Hindi%20Dubbed/%282011%29/Avan%20Ivan%20%282011%29%20720p%20%5BDual%20Audio%5D/"

// const response = await fetch(MYURL);
//   const html = await response.text();
  const html=`
<!DOCTYPE html><html class="no-js" lang="en"><head><meta charset="utf-8"><meta http-equiv="x-ua-compatible" content="ie=edge"><title>index - powered by h5ai v0.29.0 (https://larsjung.de/h5ai/)</title><meta name="description" content="index - powered by h5ai v0.29.0 (https://larsjung.de/h5ai/)"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="shortcut icon" href="/_h5ai/public/images/favicon/favicon-16-32.ico"><link rel="apple-touch-icon-precomposed" type="image/png" href="/_h5ai/public/images/favicon/favicon-152.png"><link rel="stylesheet" href="/_h5ai/public/css/styles.css"><script src="/_h5ai/public/js/scripts.js" data-module="index"></script><link rel="stylesheet" href="//fonts.googleapis.com/css?family=Ubuntu:300,400,700%7CUbuntu+Mono:400,700" class="x-head"><style class="x-head">#root,input,select{font-family:"Ubuntu","Roboto","Helvetica","Arial","sans-serif"!important}pre,code{font-family:"Ubuntu Mono","Monaco","Lucida Sans Typewriter","monospace"!important}</style></head><body class="index" id="root"><div id="fallback-hints"><span class="noJsMsg">Works best with JavaScript enabled!</span><span class="noBrowserMsg">Works best in <a href="http://browsehappy.com">modern browsers</a>!</span><span class="backlink"><a href="https://larsjung.de/h5ai/" title="h5ai v0.29.0 - Modern HTTP web server index.">powered by SamOnline</a></span></div><div id="fallback"><table><tr><th class="fb-i"></th><th class="fb-n"><span>Name</span></th><th class="fb-d"><span>Last modified</span></th><th class="fb-s"><span>Size</span></th></tr><tr><td class="fb-i"><img src="/_h5ai/public/images/fallback/folder-parent.png" alt="folder-parent"/></td><td class="fb-n"><a href="..">Parent Directory</a></td><td class="fb-d"></td><td class="fb-s"></td></tr><tr><td class="fb-i"><img src="/_h5ai/public/images/fallback/file.png" alt="file"/></td><td class="fb-n"><a href="/DHAKA-FLIX-14/SOUTH%20INDIAN%20MOVIES/Hindi%20Dubbed/%282011%29/Avan%20Ivan%20%282011%29%20720p%20%5BDual%20Audio%5D/a_AL_.jpg">a_AL_.jpg</a></td><td class="fb-d">2023-11-02 00:04</td><td class="fb-s">214 KB</td></tr><tr><td class="fb-i"><img src="/_h5ai/public/images/fallback/file.png" alt="file"/></td><td class="fb-n"><a href="/DHAKA-FLIX-14/SOUTH%20INDIAN%20MOVIES/Hindi%20Dubbed/%282011%29/Avan%20Ivan%20%282011%29%20720p%20%5BDual%20Audio%5D/Avan%20Ivan%20%282011%29%20UNCUT%20720p%20WEBRip%20x264%20%5BDual%20Audio%5D%5BHindi%20DD2.0%2BTamil%202.0%5D%20-DMV.mkv">Avan Ivan (2011) UNCUT 720p WEBRip x264 [Dual Audio][Hindi DD2.0+Tamil 2.0] -DMV.mkv</a></td><td class="fb-d">2023-11-02 00:05</td><td class="fb-s">1452887 KB</td></tr></table></div></body></html><!-- h5ai v0.29.0 - https://larsjung.de/h5ai/ -->
`;
  // Create a DOM parser
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, 'text/html');

  const dom = new JSDOM(html);
  const doc = dom.window.document;
  
  // Get all links from the table
  const links = Array.from(doc.querySelectorAll('table tr td.fb-n a'))
    .filter(link => !link.textContent.includes('Parent Directory'))
    .map(link => ({
      name: link.textContent,
      req: {
        url: new URL(link.getAttribute('href'), MYURL).href
      }
    }));

//   ctx.res = {
//     name: new URL(MYURL).pathname.split('/').pop() || 'download',
//     files: links
//   };

console.log(links)