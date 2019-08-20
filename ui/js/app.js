import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Provider } from 'react-redux';

import Editor from './components/editor';
import Graph from './components/graph';
import Control from './components/control';
import '../style/app.css';

import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Grid container component='main' className='app'>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} component={Paper}>
                    <Control />
                    <Editor />
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8} component={Paper}>
                    <Graph />
                </Grid>
            </Grid>
        </Provider>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('container'),
);
