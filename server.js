var express = require('express');
var Moment = require('moment-timezone');
var TwitterBot = require('node-twitterbot').TwitterBot;

var app = express();

var Bot = new TwitterBot('./twit.json');

var words = [
  "qui onda loco",
  "wena wena perro!",
  "qui pa'",
  "hello there!",
  "hola esto",
  "wena zoorron'"];

var cont = 0;

var twteerAux = function(){

  var ramdom = words[Math.floor(Math.random()*words.length)];
  var date = Moment().tz('America/Santiago').format('HH:mm:ss');
  var text = (ramdom+', '+'son las: '+date);

  Bot.tweet(text, function(){
    console.log(text);
    cont++;
    console.log("se ha enviado el tweet Nº: "+cont);
  });
};

setInterval(twteerAux, 10000); // 900000 envia un tweet cada 15 min. 

app.get('/', function(req, res) {
  res.send(ramdom+','+' son las: '+date);
});

var port = app.listen(process.env.PORT || 4000);

app.listen(port, function(){
  console.log('linstening in port 4000');
});
