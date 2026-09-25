// let fs = require("fs");

// READFILE

// Synchronous // Bade file me code block ho jaega!

// const dataSync = [
//   fs.readFileSync("mytest.txt", "base64"),
//   fs.readFileSync("mytest.txt", "binary"),
//   fs.readFileSync("mytest.txt", "ucs-2"),
//   fs.readFileSync("mytest.txt", "ucs2"),
//   fs.readFileSync("mytest.txt", "latin1"),
//   fs.readFileSync("mytest.txt", "utf-16le"),
//   fs.readFileSync("mytest.txt", "utf-8"),
//   fs.readFileSync("mytest.txt", "utf8"),
//   fs.readFileSync("mytest.txt", "base64"),
// ];

// dataSync.forEach((x) => console.log(x));



// Asynchronous // Aage ka code run hoga, async wala thread pool me jaega, event loop chalega

// const dataAsync = fs.readFile("mytest.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(data)
// })

// With Promises //


// const fs = require('fs').promises
// async function prom() {
//     try{
//         let wawa = await fs.readFile('mytest.txt', "utf-8")
//         console.log(wawa)
//     } catch (err) {
//         console.log(err)
//     }
// }
// prom()


//////////////////////////////////////////////////////////////////////////////////


// WRITEFILE //

// fs. writeFileSync("mytest.txt", "Lalalalalalalalalalalal")
// console.log(fs.readFileSync("mytest.txt", "utf8"))

//////////////////////////////////////////////////////////////////////////////////

// APPENDFILE //

// fs.appendFileSync("mytest.txt", "\n Accha Beta")
// console.log(fs.readFileSync("mytest.txt", "utf8"))

//////////////////////////////////////////////////////////////////////////////////

// Practice //

// let synn = fs.readFileSync('mytest.txt', 'utf-8')
// console.log(synn)

// fs.readFile("mytest.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });   

