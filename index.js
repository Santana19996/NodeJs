const fs = require("fs");
const http = require("http");

// ------------Files---------------------------------

// Blocking synchronous way
// const textIn = fs.readFileSync("txt/input.txt", "utf-8");
// console.log(textIn);
// const textOut = `this is what we know about the avocado: ${textIn}.\nCreated on {Datenow()}`;
// fs.writeFileSync("txt/output.txt", textOut);
// console.log("File has been written!");

// Non-blocking, asynchronous way;
// fs.readFile(
//   "/Users/oscarsantana/nodeStarter/txt/start.txt",
//   "utf-8",
//   (err, data1) => {
//     if (err) return console.log("Error");
//     fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//       console.log(data2);
//       fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//         console.log(data3);

//         fs.writeFile(
//           "./txt/append.txt",
//           `${data2}\n${data3}`,
//           "utf-8",
//           (err) => {
//             console.log("Your file has been written 🤑");
//           }
//         );
//       });
//     });
//   }
// );
// console.log("Will read file now");

// --------------Server-----------------------

const server = http.createServer((req, res) => {
  res.end("Hello from the server!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
