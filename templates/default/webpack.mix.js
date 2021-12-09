const mix = require("laravel-mix")
const path = require("path")
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.postCss("resources/css/app.css", "public/css")
    .ts("resources/js/app.ts", "public/js")
    .vue()
    .extract(["vue"])
    .sourceMaps(false)

mix.alias({
    ziggy: path.resolve("vendor/tightenco/ziggy/dist"), // or 'vendor/tightenco/ziggy/dist/vue' if you're using the Vue plugin
})

mix.webpackConfig({
    output: {
        chunkFilename: "js/[name].js?id=[chunkhash]",
    },
})

if (!mix.inProduction()) {
    mix.browserSync({
        proxy: process.env.APP_URL,
        watch: true,
        https: true,
    })
}

if (mix.inProduction()) {
    mix.version()
}
