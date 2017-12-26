import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as core from './core/index';


export default function (opts = {}) {

    const app = core.create(opts, {});
    const oldAppStart = app.start;
    app.router = router;
    app.start = start;
    return app;

    function router(router) {
        app._router = router;
    }

    function start(container) {
        if (isString(container)) {
            container = document.querySelector(container);
        }

        oldAppStart.call(app);

        const store = app._store;
        if (container) {
            render(container, store, app, app._router);
        } else {
            return getProvider(store, this, this._router);
        }
    }
}

function isString(str) {
    return typeof str === 'string';
}

function getProvider(store, app, router) {
    return extraProps => (
        <Provider store={store}>
            {router({ app })}
        </Provider>
    );
}

function render(container, store, app, router) {
    const element = React.createElement(getProvider(store, app, router));
    ReactDOM.render(element, container);
}