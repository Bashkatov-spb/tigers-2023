const fs = require('fs');

fs.readFile('./game/start.txt', 'utf-8', (err, data) => {
  if (err) throw new Error(err);
  console.log(data);
  fs.readFile(`./game/${data}.txt`, 'utf-8', (err1, data1) => {
    if (err1) throw new Error(err1);
    console.log(data1);
    fs.readFile(`./game/${data1}.txt`, 'utf-8', (err2, data2) => {
      if (err2) throw new Error(err2);
      console.log(data2);
      fs.readFile(`./game/${data2}.txt`, 'utf-8', (err3, data3) => {
        if (err3) throw new Error(err3);
        console.log(data3);
      });
    });
  });
});
