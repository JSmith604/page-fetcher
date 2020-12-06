
const url = process.argv[2];
const path = process.argv[3];
const request = require('request');
const fs = require('fs');
// fs.open(path, flags[mode], callback)

const options = {
    url: url,
    method: 'GET'
};

request(options, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
     console.log(fs.writeFile(path, body, (err) => {
       if (err) throw err;
     }))
});




