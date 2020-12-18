const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const router = require('./routes');
const socketIo = require('socket.io')


const app = express();
const server = http.Server(app);
const io = socketIo(server);

app.use(( req , res ,next) => {
 req.io = io;
 return next();
});

app.use(cors());
app.use(express.json());
app.use(router);

mongoose.connect('mongodb://localhost:27017/ezorders', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
server.listen(3001, () => console.log('API ONLINE'))