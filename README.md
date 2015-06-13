### Installation 
```bash 
  npm install twitter-oauth-echo --save 
```

### Basic Usage
Request must contain x-auth-service-provider and x-verify-credentials-authorization headers.View [resources](#resources) for more info.

```javascript
var express = require('express');
var app = express();
var twitterEcho = require('twitter-oauth-echo');

app.use(twitterEcho({ errorMessage : 'You are not authorized' })); 
//errorMessage defaults to UnAuthorized 

```
Sample usage with express.Router object. 
```javascript 
var express = require('express');
var twitterEcho = require('twitter-oauth-echo');
var router = express.Router();

//check for all routes and methods of router 
router.all('*' , twitterEcho());

router.get('/hello' , function(req , res ){
	res.send('hello will be sent if req is authorized.');
});

module.exports = router ;
```

### Resources 
- [How Twitter OAuth Echo works](https://dev.twitter.com/oauth/echo) 
- [Twitter OAuth Echo for Android](https://dev.twitter.com/twitter-kit/android/oauth-echo)
- [Twitter OAuth Echo for IOS](https://dev.twitter.com/twitter-kit/ios/oauth-echo)

### License 
This repository is licensed under the [MIT License](https://github.com/scriptnull/twitter-oauth-echo/blob/master/LICENSE) 
