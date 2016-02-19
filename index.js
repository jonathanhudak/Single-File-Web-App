var port = process.env.PORT || 3000;
var express = require('express');
var app = express();

function page(content){
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Single File</title>
        <style>
          body {
            background: aqua
          }
        </style>
    </head>
    
    <body>
        <h1><a href='/'>Single File App</a></h1></body>
        <a href='/about'>About</a>
        <button id='the-button'>Click</button>
        ${content}
        <script>
          var button = document.getElementById('the-button')
          button.addEventListener('click', function() {
            alert('Clicked the button!');
          });
        </script>
    </body>
    </html>
    `
}

const index = `
  <h2>Index</h2>
`
const about = `
  <h2>About</h2>
`

app.get('/', function (req, res) {
  res.send(page(index));
});

app.get('/about', function (req, res) {
  res.send(page(about));
});

app.listen( port, function () {
  console.log(`Listening on port ${port}!`);
});