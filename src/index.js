import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MainRouter from "./router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const App = () => (
    <MuiThemeProvider>
        <MainRouter />
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
