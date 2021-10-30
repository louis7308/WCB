const express = require('express');
const app = express();
const ejs = require('ejs');
const crypto = require('crypto');

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/login', (req, res) => {
    res.render('contact');
})

app.post('/login', (req, res) => {
    console.log(req.body);
    crypto.pbkdf2(req.body.password, 'seungwon', 10852, 64, 'sha512', (err, key) => {
        console.log(key.toString('base64'));
    })
    res.send('hi')
})

app.listen(3000, () => {
    console.log('서버 대기중');
})