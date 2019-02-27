// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get('/api/timestamp/', function(req, res) {
  let date = new Date();
  res.send({
    'unix': date.getTime(),
    'utc': date.toString()
  });
})

// http://expressjs.com/en/starter/basic-routing.html
app.get('/api/timestamp/:date_string', function(req, res) {

  let date

  // date checking
  if(req.params.date_string.length > 0) {
    if(new Date(req.params.date_string) === 'Invalid Date'){
      res.send({
        'error': 'Invalid Date'
      })
    } else {
      if(isNaN(req.params.date_string)){
        date = new Date(req.params.date_string);
      } else {
        date = new Date(Number(req.params.date_string));
      } 
    }
  } else {
    date = new Date(); 
  }

  
  res.send({
    'unix': date.getTime(),
    'utc': date.toString()
  });
});


// listen for requests :)
const listener = app.listen(3500, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
