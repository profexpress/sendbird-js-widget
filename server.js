const express = require('express');
const app = express();

const PORT = 9000;

app.use(express.static('dist'));
app.use(express.static('./'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(PORT);
console.log(`[SERVER RUNNING] http://localhost:${PORT}`);
