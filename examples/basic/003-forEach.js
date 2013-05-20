var aa = [1,2,3,4,5];


var callback = function(i) {
  console.log('>'+i);
}
/*
aa.forEach(function(t){
  console.log(t);
})
*/

aa.forEach(callback);
