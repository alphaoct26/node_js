// const{readFileSync,writeFileSync}=require('fs')
// const first = readFileSync('./content.txt','utf8')
// console.log(first);
// writeFileSync('./content.txt','   hiii',{flag:'a'});

// <<< the above code is for syncournous type>>>>>

const { readFile, writeFile } = require('fs')
const first = readFile('./content.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(result)
    writeFile('./content.txt', '   hiii', { flag: 'a' }, (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log("updated !!!")
    });
})

