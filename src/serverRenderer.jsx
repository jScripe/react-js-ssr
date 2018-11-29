import { StaticRouter } from 'react-router-dom';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Root from './root';
import configureStore from './configureStore';

function renderHTML(html, preloadedState) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>React App</title>
      <link href="https://fonts.googleapis.com/css?family=Kodchasan" rel="stylesheet">
      ${process.env.NODE_ENV === 'development' ? '' : '<link href="/main.css" rel="stylesheet"'}
    </head>
    <body>

      <div id="root">${html}</div>
      <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      
      <script src='/js/bundle.js'></script>
    </body>
    
    </html>
  `;
}

export default function serverRenderer() {
    return (req, res) => {
        if (isEmpty(req.query)) {
            const store = configureStore();
            const context = {};
            const root = <Root context={ context } location={ req.url } Router={ StaticRouter } store={ store } />;
            const htmlString = renderToString(root);

            const preloadedState = store.getState();

            res.send(renderHTML(htmlString, preloadedState));
        } else {
            let { search: value, searchBy: filter, sortBy: resultsFilter } = req.query;
            let changedFieldsForPreloadedStore = {
                searchField: {
                    value
                },
                resultsFilter: {
                    resultsFilter
                },
                search: {
                    list: [],
                    isFetching: false,
                    filter
                }
            };

            const store = configureStore(changedFieldsForPreloadedStore);
            const context = {};
            const root = <Root context={ context } location={ req.url } Router={ StaticRouter } store={ store } />;
            const htmlString = renderToString(root);

            const preloadedState = store.getState();

            res.send(renderHTML(htmlString, preloadedState));
        }
    };
}

function isEmpty(object) {
    return JSON.stringify(object) === '{}';
}
