const args = process.argv;
let newArgs = args.splice(2);


const timer = (arr) => {
  if (arr.length !== 0) {
    for (const element of arr) {
      if (element > 0 && !isNaN(element)) {
        setTimeout(() => {
          process.stdout.write('\x07');
        }, element * 1000);
      }
    }
  }
};

timer(newArgs);