const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/user');
require('dotenv').config();
const cors = require('cors');

app.use(express.json());

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(cors(
{       origin: 'http://localhost:5173',
        credentials: true
}
));


mongoose.connect('process.env.MONGO_URL');

app.get('/test',(req,res) => {
        res.json('test ok');
});



app.post('/register', async(req,res) => {
 const {name,email,password} = req.body; 
 try{
 const userDoc = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password,bcryptSalt),
}); 
 res.json(userDoc);
}
catch(err){
        res.status(422).json(err);
}
}); 

app.listen(9000);   
