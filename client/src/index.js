import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App.jsx';

// ReactDOM.render(<App />, document.getElementById('hostedBy'));
ReactDOM.render(
    <Router>
        <Route path="/" component={App} />
    </Router>,
    document.getElementById('hostedBy')
);