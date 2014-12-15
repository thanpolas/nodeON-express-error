# nodeON-express-error

> The nodeON Express Error Handler

[![Build Status](https://secure.travis-ci.org/thanpolas/nodeON-express-error.png?branch=master)](http://travis-ci.org/thanpolas/nodeON-express-error)

## Install

Install the module using NPM:

```
npm install nodeon-express-error --save
```

## Documentation

Just add as a plain express middleware, make sure to add it **LAST**.

```js

var nodeonExpressError = require('nodeon-express-error');

/** ... your middleware ... */

// Now add the nodeON Express Error Handler LAST
app.use(nodeonExpressError);
```

### HTTP Code

To propagate an HTTP Code response to the client use the property `httpCode`.

### Works with NodeON Error

This Error Handler is optimized to work with the [nodeON Error Package](https://github.com/thanpolas/nodeON-error), check it out it's worth 60".

## Release History

- **v0.0.4**, *11 Dec 2014*
    - Fix bug in casting unknown errors.
- **v0.0.3**, *11 Dec 2014*
    - Now also logs the full requested url.
- **v0.0.2**, *11 Dec 2014*
    - Properly expose the handler and write test cases.
- **v0.0.1**, *11 Dec 2014*
    - Big Bang

## License

Copyright ©2015 Thanasis Polychronakis. Licensed under the MIT license.
