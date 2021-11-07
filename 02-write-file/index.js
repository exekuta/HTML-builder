const path = require('path');
const fs = require('fs');
const { stdin, stdout } = process;

// const readline = require('readline');
// const rl = readline.createInterface({ stdin, stdout });

const filePath = path.join(__dirname, 'destination.txt');
const writeableStream = fs.createWriteStream(filePath);

stdout.write('\nWhat is your name?\n');
stdin.on('data', (data) => {
    const trimData = data.toString().trim();
    if (trimData == 'exit') {
    process.exit();
  } else {
    writeableStream.write(data);
    stdout.write('\nNeed mo-o-o-ore information!\n');
    stdout.write('or CTRL + C to exit\n');
  }
});

process.on('SIGINT', function () {
  process.exit();
});

// rl.on('SIGINT', () => { 
//   process.exit();
// });

process.on('exit', () => stdout.write('\nGL & HF!!!'));