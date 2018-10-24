const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const route = require('./route');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


//DB setup
mongoose.connect('mongodb://127.0.0.1:Auth/Auth', { useNewUrlParser: true })



//App Setup
app.use(morgan('combined'));                     // Morgan is logging framework
app.use(cors());                                   //Hey browser, the request can come from anywhere...i don't care
//app.use(bodyParser.json({ type: '*/* '}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

route(app);

//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on: ", port);



