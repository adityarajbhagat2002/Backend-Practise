const {readFile,writeFile}= require('fs')

readFile('./Content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err) 
        return;
    }
    const first= result
    readFile('./Content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)

        }
        const second= result

        writeFile('./Content/third.txt',`it is the combination of both : ${first} ,${second}`,
        (err,result)=>{
            if(err){
                return err
            }
            console.log(result)

        })
    })

})