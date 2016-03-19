// square.js
function main(params){
  console.log('square.js being called with params:', params);
  return {payload: Math.pow(params.x, 2)};
}
