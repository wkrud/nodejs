var members = ['hong', 'ho', 'hihi'];
console.log(members[1]);
var i = 0;
while(i < members.length){
    console.log('array loop :',members[i]);
    i++;
}

var roles = {
    'programmer' : 'hong',
    'designer' : 'ho',
    'manager' : 'hihi'
};
console.log(roles.designer);
console.log(roles['designer']);

for(var name in roles){
    console.log('object =>',name, 'value =>',roles[name]);
}