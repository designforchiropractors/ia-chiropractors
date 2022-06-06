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
            '/', '/apply', '/blog', '/contact', '/directory', '/privacy-policy', '/terms-conditions', '/application-form', '/notfound',
            '/blog/reasons-business-should-be-listed-online-directory', '/blog/simple-ways-to-grow-chiropractor-business-online',
            '/blog/why-netlify-the-simple-fast-and-secure-platform-for-developers', '/blog/top-standard-color-schemes-for-website-design',
            '/blog/top-standard-color-schemes-for-website-design', '/blog/quick-information-on-des-moines-chiropractors-in-2022',
            '/directory/kellie-hoover-iowa-family-chiropractic', '/directory/lydia-krzyzak-iowa-family-chiropractic', '/directory/leilani-zinsli-iowa-family-chiropractic'
        ],
       ),
     ]
   }
 }
}