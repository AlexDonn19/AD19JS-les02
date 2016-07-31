var nameArr = [];
var myName = '';
var flag = false;

for (var i = 0; i < 5; i++) {
  nameArr[i] = prompt('input name');
}

myName = prompt('input user name');

for (var i = 0; i < 5; i++) {
  if (nameArr[i] == myName) flag = true;
}

if (flag) {
  alert('You have been logged in successfully');
} else {
  alert('Access denied');
}
