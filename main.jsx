import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './index.jsx';
import 'antd/dist/antd.css';
import './less/antMotionStyle.less';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
