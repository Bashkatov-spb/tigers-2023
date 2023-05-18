const fs = require('fs').promises;

// Это пример на асинхронных методах
// const promise = new Promise((res, rej) => {
//   fs.readdir('./gae', (err, data) => {
//     if (err) rej(err);
//     res(data);
//   });
// });

// promise.then((result) => console.log(result)).catch(console.log);

// Это пример на промисах
// const promise = fs.readdir('./game').then(console.log);
// promise.then(console.log);
// console.log(promise, '--------');

// fs.readFile('./tmp/1.txt', 'utf8')
//   .then((fileData) => fs.writeFile('./tmp/1-copy.txt', fileData))
//   .then(() => fs.readFile('./tmp/2w.txt', 'utf8'))
//   .then((fileData) => fs.writeFile('./tmp/2-copy.txt', fileData))
//   .then(() => console.info('Файлы скопированы успешно'))
//   .catch(console.info);

// fs.readFile('./game/start.txt', 'utf-8', (err, data) => {
//   if (err) throw new Error(err);
//   console.log(data);
//   fs.readFile(`./game/${data}.txt`, 'utf-8', (err1, data1) => {
//     if (err1) throw new Error(err1);
//     console.log(data1);
//     fs.readFile(`./game/${data1}.txt`, 'utf-8', (err2, data2) => {
//       if (err2) throw new Error(err2);
//       console.log(data2);
//       fs.readFile(`./game/${data2}.txt`, 'utf-8', (err3, data3) => {
//         if (err3) throw new Error(err3);
//         console.log(data3);
//       });
//     });
//   });
// });

// fs.readFile('./game/start.txt', 'utf-8')
//   .then((data) => fs.readFile(`./game/${data}.txt`, 'utf-8'))
//   .then((data1) => fs.readFile(`./game/${data1}.txt`, 'utf-8'))
//   .then((data2) => fs.readFile(`./gamed/${data2}.txt`, 'utf-8'))
//   .then(console.log)
//   .catch(console.log);

// async function readFile() {
//   try {
//     const data = await fs.readFile('./game/start.txt', 'utf-8');
//     const data2 = await fs.readFile(`./game/${data}.txt`, 'utf-8');
//     console.log(data, data2);
//     return data2;
//   } catch (e) {
//     console.log(e);
//   }
// }

// async function writeConsole() {
//   const res = await readFile();
//   console.log(res);
// }

async function foo() {
  return new Promise((resolve) => {
    console.log('fofofof');
    setTimeout(() => {
      console.log('Foooo');
      resolve();
    }, 1000);
  });
}
console.log('Start');
foo();
console.log('Finish');
