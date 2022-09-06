const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const user = require('./routes/user');
const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use('/api',user);

app.listen(3000,()=>{
    console.log('Server Running..');
})