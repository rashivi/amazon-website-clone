const express = require('express');
const app = express();
const connectDB = require('./db');
const users = require('./routes/users')

const PORT = 3000;

//body parser
app.use(express.json());
//connect to database
connectDB();

app.use('/api',users);

/// -> /api/users

app.get('/', (req,res) => {
    console.log("I am inside home page route handler");
    res.send("Hello jee, Welcome to CodeHelp");


})
app.listen(PORT, ()=> {
    console.log("Server is Up")
})
