import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { imageList } from './data';
import { initLocalStorage } from './helpers';

initLocalStorage(imageList);

ReactDOM.render(<App/>, document.getElementById('root'));
