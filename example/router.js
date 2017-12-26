import React from 'react';
import { doapp } from '../src/index';
import { routerRedux, Route } from '../src/router';
import IndexPage from './routes/IndexPage';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history }) {
    return (
        <IndexPage />
        // <ConnectedRouter history={history}>
        //     <Route path="/" exact component={IndexPage} />
        // </ConnectedRouter>
    );
}

export default RouterConfig;

