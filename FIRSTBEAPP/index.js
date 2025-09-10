//including express module and initialising an app
const express = require('express');
const app =  express();

//variable that stroses the port number
const port = 3000; 

app.get('/', (req, res) => {
  console.log("Get request recive hui h ")
})

//request -> get / put / delete / 
//path - /,  /about, /articles, /blog

//start your app or server
app.listen(port, () => {
    console.log("Application start ho chuki h");
    
})
