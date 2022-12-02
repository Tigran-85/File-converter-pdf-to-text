const { extractText } = require('./index');
const fs = require('fs');

extractText('./sample.pdf')
    .then(result => {
        const file = fs.createWriteStream('./result.txt');
        file.write(result);
    })
    .catch(err => {
        console.error(err.message);
    })