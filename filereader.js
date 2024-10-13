const fs = require('fs')

// read welcome.txt
fs.readFile('welcome.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
});
