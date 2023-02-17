const {readFileSync, writeFileSync}= require('fs')


const first= readFileSync('./Content/first.txt','utf8')
const second= readFileSync('./Content/second.txt','utf8')

console.log(first)
console.log(second)

writeFileSync('./Content/third.txt',
`it is the combination of first and second file : ${first} ,${second}`,{flag:'a'}
)
