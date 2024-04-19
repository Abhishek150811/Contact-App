const express = require("express");
const morgan = require("morgan");
const contactRouter = require('./router/contactRouter')
const UserRouter = require('./router/userRouter')
const sendMessage = require('./utils/sendMsg')

const app = express();

app.use(morgan('dev'))



app.use('/api/v1/users' , contactRouter) ; 



module.exports = app