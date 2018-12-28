import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/';

const appNode = document.getElementById('app');
ReactDOM.hydrate(<App/>, appNode);
