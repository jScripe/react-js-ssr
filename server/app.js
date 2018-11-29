const express = require('express');
// const history = require('connect-history-api-fallback');

const app = express();
/*eslint-disable*/
if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
    const webpackConfig = require('../webpack');

    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler));
    app.use(webpackHotMiddleware(compiler.compilers.find((a)=> a.name === 'client')));
    app.use(webpackHotServerMiddleware(compiler));
} else {
    app.use(express.static('public'));
    const serverRenderer = require('../public/js/serverRenderer.jsx').default;
    app.use(serverRenderer());
    app.get('/', );
}


module.exports = app;
