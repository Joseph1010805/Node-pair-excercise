process.stdout.write("prompt > ");

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    require('./pwd.js')();
  }
  if (cmd === "ls") {
    require('./ls.js');
  }

  process.stdout.write(`\nprompt >`)
})
