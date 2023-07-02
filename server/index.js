const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/db')();
const bodyParser = require('body-parser');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path');

//Routes
const AuthRoutes = require('./Routes/User');
const ProductRoutes = require('./Routes/District')

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors({origin: true, credentials: true}));
app.use(cookieParser());
// Test 
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/test', function(req, res){
    res.send("Hello world!");
});

//Admin Auth Routes
app.use('/user',AuthRoutes)
app.use('/product',ProductRoutes)


app.listen(process.env.PORT,()=>{
    console.log(`server is listening on the ${process.env.PORT}`)
})