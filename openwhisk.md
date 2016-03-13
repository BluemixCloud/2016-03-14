# OpenWhisk

#### Links
  - [Home](https://new-console.ng.bluemix.net/openwhisk/)
  - [Configure Authentication](https://new-console.ng.bluemix.net/openwhisk/cli)
  - [Documentation](https://new-console.ng.bluemix.net/docs/openwhisk/index.html)
  - [Using the REST API](https://amanoblog.wordpress.com/2016/03/03/ibm-bluemix-openwhisk-rest-api)

#### Configure
```sh
$ wsk property set --auth __KEY__ --namespace "chyld_dev"
$ wsk action invoke /whisk.system/samples/echo -p message hello --blocking --result
```

#### Show All
```sh
$ wsk list
$ wsk property get
```

#### Creating an Add Action
```sh
$ wsk action create add add.js
$ wsk action list
$ wsk action get add
$ wsk action invoke add --blocking -p x 3 -p y 2
$ wsk action update add add.js
$ wsk action delete add
```

# activation
wsk activation list
wsk activation get 08488542884845839b476b5c174bd1bf
wsk activation result 08488542884845839b476b5c174bd1bf
wsk activation logs 08488542884845839b476b5c174bd1bf
wsk activation poll

# trigger
wsk action create aAdd add.js 
wsk trigger create tAdd
wsk rule create --enable rAdd tAdd aAdd
wsk action list
wsk trigger list
wsk rule list
wsk trigger fire tAdd -p x 7 -p y 8
wsk activation list
wsk activation get 3b17cd81a6644dd39a751c10955748be
