### twitter-oauth-echo
A Simple Express middleware for Twitter OAuth Echo authorization 

### Resources 
- [How Twitter OAuth Echo works](https://dev.twitter.com/oauth/echo) 
- [Twitter OAuth Echo for Android](https://dev.twitter.com/twitter-kit/android/oauth-echo)
- [Twitter OAuth Echo for IOS](https://dev.twitter.com/twitter-kit/ios/oauth-echo)


### Installation 

```bash 
  npm install twitter-oauth-echo --save 
```

###Usage
```javascript
var express = require('express');
var app = express();
var twitterEcho = require('twitter-oauth-echo');
app.use(twitterEcho({ errorMessage : 'You are not authorized' })); 
```

