import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import { App } from './app';
import * as serviceWorker from './serviceWorker';

const rootElement: HTMLElement | null = document.getElementById('root');

ReactDOM.render(<App />, rootElement);

if (module.hot) {
  module.hot.accept('./app', async () => {
    const { App: NextApp } = await import('./app');
    ReactDOM.render(<NextApp />, rootElement);
  });
}

/*
If you want your app to work offline and load faster, you can change
unregister() to register() below. Note this comes with some pitfalls.
Learn more about service workers: http://bit.ly/CRA-PWA
*/
serviceWorker.unregister();
