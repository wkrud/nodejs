var fs = require('fs');
// fs.readFile('sample.txt', 'utf8', function(err, data){
//     console.log(data);
// });
// fs.readFile(경로, 인코딩, 콜백함수)
fs.readFile('sample.txt', 'utf8', (err, data) => {
    console.log(data);
});