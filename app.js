// Import React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line
import Framework7React from 'framework7-react';
import Framework7 from './framework7-custom';

import '../css/framework7-custom.less';
import '../css/icons.css';
import '../css/app.less';

import App from '../components/App';

Framework7.use(Framework7React);

const root = createRoot(document.getElementById('app'));

root.render(React.createElement(App));
