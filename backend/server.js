const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 4000;
// Importing Chats Data (Dummy)
const chats = require('./data/dummy-data');

app.get('/', (req, res, next)=> {
    res.send("APP is running!");
})

app.get('/api/chats', (req, res, next)=>{
    res.send(chats);
})

app.get('/api/chats/:id', (req, res, next)=>{
    const singleChat = chats.find(chat=>chat._id === req.params.id)
    res.send(singleChat)
})

app.listen(PORT, ()=>{
    console.log(`Backend for chatting app is running at: ${PORT}`)
})
