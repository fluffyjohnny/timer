


const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');



stdin.on('data', (key) => {
  const numArr = '1, 2, 3, 4, 5, 6, 7, 8, 9';
  const arr = ['b', '\u0003'];
  
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  if (numArr.includes(key)) {
    console.log(`\nsetting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
  if (!numArr.includes(key) && !arr.includes(key)) {
    console.log('invalid input');
  }
  if (key === '\u0003') {
    console.log('Thanks for using me, caio!');
    process.exit();
  }
});

// process.on('exit', () => console.log('Thanks'));


