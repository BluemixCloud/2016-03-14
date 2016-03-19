// volume.js
function main(params){
  console.log('volume.js being called with params:', params);
  return {payload: params.x * params.y * params.z};
}
