import { createStore, combineReducers } from 'redux';
import getReducer from './getReducer';
// Internal model to update global state when do unmodel
const doappModel = {
    namespace: '@@doapp',
    state: 0,
    reducers: {
        UPDATE(state) { return state + 1; },
    },
};

export function create(hooksAndOpts = {}, createOpts = {}) {

    const {
        initialReducer
      } = createOpts;

    const app = {
        _models: [
            { ...doappModel },
        ],
        _store: null,
        start,
    };
    return app;

    function start() {

        const reducers = { ...initialReducer };
        for (const m of app._models) {
            reducers[m.namespace] = getReducer(m.reducers, m.state);
        }

        let devtools = () => noop => noop;
        if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
            devtools = window.__REDUX_DEVTOOLS_EXTENSION__;
        }


        // Create store
        const store = app._store = createStore(combineReducers({
            ...reducers
        }), /* preloadedState, */
            devtools(window.__REDUX_DEVTOOLS_EXTENSION__OPTIONS));

    }
}