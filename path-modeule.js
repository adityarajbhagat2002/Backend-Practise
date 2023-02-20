const path = require('path')
console.log(path.sep)


const filepath = path.join('Content','subfolder','test.txt')
console.log(filepath)


const base = path.basename('/Content','subfolder', 'test.txt')
const basepath = path.basename(filepath)
console.log(base)
console.log(basepath)

const absolute=path.resolve(__dirname,'Content')

console.log(absolute)




