const express = require('express'); 
const app = express();
const port = 3000;
app.use(express.static('__dirname'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
)};
app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/index.html');
)};
