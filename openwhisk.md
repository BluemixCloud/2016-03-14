# OpenWhisk

http -v post https://openwhisk.ng.bluemix.net/api/v1/namespaces/chyld_dev/actions/chyld/stock?blocking=true "Authorization: Basic ODk2NDllYjUtZjQ5OS00MmM4LTk4MmUtNzYzMDkzOWFiZmYzOkpxV2oxZkkyZTNkYk5FRVFhUVZZRlNTUEFRNTROaDR1RUNtdFZId0FFd2J6bEFlbUx1Vm1ab1R3eWZjNnJDNGY=" symbol=goog


https://new-console.ng.bluemix.net/docs/openwhisk/index.html

# setup
wsk property set --auth __KEY__ --namespace "chyld_dev"
wsk action invoke /whisk.system/samples/echo -p message hello --blocking --result

# sync: add.js
function main(params){
  var sum = add(params.x, params.y);
  return {payload: sum};
}
function add(x, y){
  return x + y;
}

wsk list # show all
wsk property get # show all properties

# async: timer.js
function main(){
  setTimeout(function() {
    return whisk.done({message: 'finshed computation'});
  }, 20000);

  return whisk.async();
}

# action
wsk action create add add.js
wsk action list
wsk action get add
wsk action invoke add --blocking -p x 3 -p y 2
wsk action update add add.js
wsk action delete add

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
