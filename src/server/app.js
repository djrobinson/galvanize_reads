// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routerProtect = express.Router();
var jwt    = require('jsonwebtoken');
// *** routes *** //
// var routes = require('./routes/index.js');
var bookRoutes = require('./routes/book_routes.js');
var authorRoutes = require('./routes/author_routes.js');
var authRoutes = require('./routes/auth_routes.js');
var bookAuthorRoutes = require('./routes/book_author_routes.js');



// *** express instance *** //
var app = express();


routerProtect.use(function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  console.log("TOKEN: ", token);
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, 'superSecret', function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
        success: false,
        message: 'No token provided.'
    });
  }
});

// *** static directory *** //
app.set('views', path.join(__dirname, 'views'));


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));


// *** main routes *** //
app.get('/', function(req, res, next) {
  console.log("index.html")
  res.sendFile(path.join(__dirname, '../client/app/views', 'index.html'));
});
// app.use('/', routes);
app.use('/api', routerProtect);
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/auth', authRoutes);
app.use('/public', bookAuthorRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    .json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  .json({
    message: err.message,
    error: {}
  });
});




module.exports = app;
