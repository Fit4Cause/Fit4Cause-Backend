const express = require('express')
const app = express();
const cors= require('cors');
const connectMongoose= require('./db.js')
const bodyParser = require('body-parser');


 app.use(cors());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json());

const router=express.Router();



//stores foodData here
connectMongoose();

// app.use('/api/', require('./routes/createUser.js'));
// app.use('/api/', require('./routes/foodData.js'));
// app.use('/api', require('./routes/OrderDetails.js'))
app.listen(3000,()=>{
    console.log("server is runnning at port 3000");


})