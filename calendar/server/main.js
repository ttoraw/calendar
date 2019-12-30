// import express from 'express';
const express = require("express");
// import path from 'path';
const path = require("path");

// import webpack from 'webpack';
const webpack = require("webpack");
// import WebpackDevServer from 'webpack-dev-server';
const WebpackDevServer = require("webpack-dev-server");

const app = express();
const port = 3000;
const devPort = 4000;

// import morgan from 'morgan'; // HTTP REQUEST LOGGER
const morgan = require("morgan");
// import bodyParser from 'body-parser'; // PARSE HTML BODY
const bodyParser = require("body-parser");
// import mongoose from 'mongoose';
const mongoose = require("mongoose");
// import session from 'express-session';
const session = require("express-session");
/* setup routers & static directory */
// import api from './routes';
const api = require('./routes');
app.use('/api', api);



app.use(morgan('dev'));
app.use(bodyParser.json());



app.use('/', express.static(path.join(__dirname, './../public')));

app.get('/hello', (req, res) => {
    return res.send('Hello CodeLab');
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});
/* setup routers & static directory */
app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

/* handle error */
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.config.dev');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );
}


/* mongodb connection */
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
// mongoose.connect('mongodb://username:password@host:port/database=');
mongoose.connect('mongodb://localhost/codelab');

/* use session */
app.use(session({
    secret: 'CodeLab1$1$234',
    resave: false,
    saveUninitialized: true
}));
