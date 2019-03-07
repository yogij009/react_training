require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3000;







app.use(cors());
app.use(bodyParser.json());+
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('<h1>Welcome!!</h1>');
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, './public/home.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, './public/admin.html'));
});


app.listen(port, () => console.log(`My Blog App listening on port ${port}!`))