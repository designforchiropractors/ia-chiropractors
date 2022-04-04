var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

module.exports = {
 configureWebpack: config => {
   if (process.env.NODE_ENV !== 'production') return

   return {
     plugins: [
       new PrerenderSpaPlugin(
         // Absolute path to compiled SPA
         path.resolve(__dirname, 'dist'),
         // List of routes to prerender
         [
            '/', '/apply', '/blog', '/contact', '/directory', '/privacy-policy', '/terms-conditions', '/notfound',
            '/blog/reasons-business-should-be-listed-online-directory', '/blog/simple-ways-to-grow-chiropractor-business-online',
            '/blog/why-netlify-the-simple-fast-and-secure-platform-for-developers', 'blog/top-standard-color-schemes-for-website-design/'
        ],
       ),
     ]
   }
 }
}