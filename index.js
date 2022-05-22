const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/Site.html");
})

app.get('/video',(req,res)=>{
    res.sendFile(__dirname + "/video/video.mp4");
})

app.get('/Redeem',(req,res)=>{
    res.sendFile(__dirname + "/Redeem.html");
})

app.post('/', (req, res) => {
    res.send('Test Website')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})