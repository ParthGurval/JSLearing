

// const os = require('os');

// console.log("OS Platform:", os.platform);

// const { log } = require('console');
const path = require('path')

const path1= 'myDir';
const path2= 'file.txt';

const fullPath = path.join(__dirname, path1, path2);
console.log("Join Path: "+ fullPath);