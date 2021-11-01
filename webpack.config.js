const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: './public/index.js',
    output: {
        path: __dirname+'/public/dist',
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new WebpackPwaManifest({
            filename: 'manifest.json',
            inject: false,
            fingerprints: false,

            nam: 'Budget Tracker app',
            short_name: 'Budget',
            description: 'a webpack manifest to keep track of your budget online and offline',
            background_color: "pink",
            theme_color: "#ffffff",
            start_url:'/',
            icons: [
                {
                    src: path.resolve(__dirname, 'public/icons/icon-192x192.png'),
                    sizes: [192, 512],
                },
            ]
        })
    ]
}

module.exports = config; 