const express = require('express');
const server = express();
module.exports = keepAlive;
server.all('/', (req, res)=>{
    res.send('Sub or you will never get members')
})

function keepAlive(){
    server.listen(5000, ()=>{console.log("Active!")});
}

keepAlive();
