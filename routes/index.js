const express = require('express');
const router = express.Router();



const homeRouter = require('./home');
const postsRouter = require('./post');
function route (app) {


    // home page
    app.use('/posts', postsRouter);
    app.use('/', homeRouter);
}

module.exports = route;