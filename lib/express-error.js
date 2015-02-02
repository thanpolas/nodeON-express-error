/*
 * nodeON-express-error
 * The nodeON Express Error Handler
 * https://github.com/thanpolas/nodeON-express-error
 *
 * Copyright ©2015 Thanasis Polychronakis
 * Licensed under the MIT license.
 */

/**
 * @fileOverview nodeON-express-error Base.
 */
module.exports = {};

var appError = require('nodeon-error');
var helpers = require('nodeon-helpers');

var log = require('logg').getLogger('nodeonExpressError.errorHandler');

/**
 * The master Error Handler.
 *
 * @param {Error} err The error thrown.
 * @param {Object} req The request Object.
 * @param {Object} res The response Object.
 * @param {Function(Error=)} next passing control to the next middleware.
 */
/*jshint unused:false */
module.exports = function (err, req, res, next) {
  var httpCode = 500;
  var error;

  if (err instanceof Error) {
    httpCode = err.httpCode || httpCode;

    // check if it's a nodeon-error
    if (err.isNodeon) {
      error = err.toApi();
    } else {
      var nodeonError = new appError.Error(err);
      error = nodeonError.toApi();
    }
  } else {
    var tmpErr = new appError.Error(err);
    error = tmpErr.toApi();
  }


  log.warn('handle() :: Handling error, httpCode:', httpCode, 'Request Url:',
    req.originalUrl, 'Message:', error.message);
  log.finest('handle() :: Raw error object:', err);

  res.status(httpCode);

  // figure out what the client accepts
  if (helpers.isRequestJson(req)) {
    res.json(error);
  } else {
    res.render('error/' + error.httpCode, {error: error});
  }
};
