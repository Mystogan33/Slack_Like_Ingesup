const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Server works !');
})

app.get('/:nom', function(req, res) {
  res.send('Bonjour ' + req.params.nom);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
