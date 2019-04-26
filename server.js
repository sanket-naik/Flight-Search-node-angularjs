let express = require('express');
let flightsRouter = require('./routes/flights');
let indexRouter = require('./routes/index');
let app=express()
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || '3000';

app.use('/flights', flightsRouter);
app.use('/', indexRouter);

app.listen(port);
console.log("server running in "+port);