const fs = require('fs');


module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file} `;
        }, '');
        console.log(filesToString);
    });
};


module.exports.touch = (path, data) => {
    fs.writeFile(path, data, function(err) {
        if (err) throw err;
        console.log('Successfully written');
    });
};


module.exports.mkdir = () => {
    fs.mkdir('./', (dir) => {
        console.log('${dir} created!');
    });
};