var linebot = require('linebot');
var express = require('express');
var jsonFile = require('jsonfile');
var jsonData = jsonFile.readFileSync('LineAuth.json');

var bot = linebot({
  channelId: jsonData.channelId,
  channelSecret: jsonData.channelSecret,
  channelAccessToken: jsonData.channelAccessToken
});

bot.on('message', function(event) {
  console.log(event);
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
