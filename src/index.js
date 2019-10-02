import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ConnectFour from './ConnectFour';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ConnectFour />, document.getElementById('root'));


serviceWorker.unregister();
