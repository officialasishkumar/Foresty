import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';
import ScrollToTop from './components/scrollToTop';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Router>
        <ScrollToTop />
        <App />
    </Router>
);  