process.stdout.write("prompt > ");

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    require('./pwd.js')();
  }
  if (cmd === "ls") {
    require('./ls.js');
  }
  if (cmd.includes("cat")) {
    let catArr = cmd.split(" ")
    let fileName = catArr[1]
    const cat = require('./cat.js')
    cat(fileName)
  }
  process.stdout.write(`\nprompt >`)
})
