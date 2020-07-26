import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { compose } from 'recompose';
import reducer from './reducers/root-reducer';
import createAPI from '../core/services/api';

const composeEnhancers =
    (typeof window !== `undefined` &&
        // eslint-disable-next-line
        (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose)) ||
    compose;

const api = createAPI();

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        composeEnhancers && composeEnhancers()
    ) as any
);

export default store;
