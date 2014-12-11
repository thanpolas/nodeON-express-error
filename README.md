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

## Release History

- **v0.0.1**, *11 Dec 2014*
    - Big Bang

## License

Copyright ©2015 Thanasis Polychronakis. Licensed under the MIT license.
