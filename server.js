var express = require('express')
var app = express()

//for DEV envrionment
//app.use(express.static(__dirname));
app.use('/js', express.static(__dirname + '/bower_components'));

app.use(express.static('theme'))
app.get('index.html', function (req, res) {
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
