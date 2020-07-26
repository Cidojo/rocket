import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { Provider } from 'react-redux';
import store from './store/store';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-size: 16px;
        line-height: 20px;
        font-family: Ubuntu, Helvetica, sans-serif;
    }
    
    * {
      box-sizing: border-box;
    }
`;

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>,
    document.getElementById('root')
);
