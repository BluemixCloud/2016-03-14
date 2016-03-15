# OpenWhisk

#### Links
  - [Home](https://new-console.ng.bluemix.net/openwhisk/)
  - [Configure Authentication](https://new-console.ng.bluemix.net/openwhisk/cli)
  - [Dashboard](https://new-console.ng.bluemix.net/openwhisk/dashboard)
  - [Documentation](https://new-console.ng.bluemix.net/docs/openwhisk/index.html)
  - [REST API](https://new-console.ng.bluemix.net/apidocs/98)
  - [REST API Tutorial](https://amanoblog.wordpress.com/2016/03/03/ibm-bluemix-openwhisk-rest-api)

#### Setup
```sh
$ wsk property set --auth APIKEY --namespace "ORGNAME_SPACENAME"
# to test
$ wsk action invoke /whisk.system/samples/echo -p message hello --blocking --result
# to view credentials
$ wsk property get
# to view all assets
$ wsk list
$ # tail the activation logs
$ wsk activation poll
```

#### Lab 1
```sh
$ wsk package create math
$ wsk list
$ # write a function that squares a number, see below
$ touch square.js
$ # upload the function to the cloud
$ wsk action create math/square square.js
$ # invoke or call the function
$ wsk action invoke math/square --blocking -p x 3
$ # when invoked, it will give you an activation id
$ # let's view that id to see more details
$ wsk activation get ACTIVATION_ID
$ # make a change to square.js and update
$ wsk action update math/square square.js
```

```js
// square.js
function main(params){
  console.log('square.js being called with params:', params);
  return {payload: Math.pow(params.x, 2)};
}
```

#### Lab 2
```sh
$ touch random.js # use the code below
$ # upload action
$ wsk action create math/random random.js
$ # view all your assets
$ wsk list
$ # call the function, no parameters are needed
$ wsk action invoke --blocking math/random
```

```js
// random.js
/* global whisk */

var request = require('request');

function main(params){
  console.log('square.js being called with params:', params);

  var o = {url: 'https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16', json: true};
  request(o, function(err, res, body){
    whisk.done({payload: body.data});
  });

  return whisk.async();
}
```

#### Lab 3 to N
  - Make primitive math services:
    - Area
    - Volume
    - Sum
    - Average
    - StdDev
    - Min
    - Max
