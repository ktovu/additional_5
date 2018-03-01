module.exports = function check(str, bracketsConfig) {
  // your solution
  var mass = [];
  for (var a = 0; a < str.length; a++) {
    for (var b = 0; b < bracketsConfig.length; b++) {
      if (str[a] == bracketsConfig[b][0]) {
        mass.push(str[a]);
      }
      if (str[a] == bracketsConfig[b][1]) {
        mass.pop(str[a]);
      }
    }
  }
  if (mass == 0){
    return true;
  }
  else{
    return false;
  }
}
