import React from 'react';
import ReactDOM from 'react-dom/client'; //object created by react

import './index.css';
import App from './App';//extensions can excluded for js files


const root = ReactDOM.createRoot(document.getElementById('root')); //<App /> is an example of jsx syntax, can't just write html in js files. "root" defined in public>index.html
root.render(<App />);