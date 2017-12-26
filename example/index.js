import { doapp } from '../src/index';
import router from './router';
import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './routes/IndexPage';
import { routerRedux, Route } from '../src/router';

const { ConnectedRouter } = routerRedux;

// function RouterConfig({ history }) {
//     return (
//         <ConnectedRouter history={history}>
//             <Route path="/" exact component={IndexPage} />
//         </ConnectedRouter>
//     );
// }
// 1. Initialize
const app = doapp();
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(router);

// 5. Start
app.start("#root");
