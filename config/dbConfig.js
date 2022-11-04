const { on } = require('events');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on('error',()=>{
    console.log('Error connecting to database');
})

connection.on('connected',()=>{
    console.log('database connected successfully')
});

module.exports=mongoose;