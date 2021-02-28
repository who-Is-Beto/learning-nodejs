const { exec, spawn } = require('child_process')
const { stdout } = require('process')

//exec just execute something

/* exec('node concepts/modules/fs.js', (err, stdout, stderr) => {
  if (err) {
    console.error(err)
    return false
  }

  console.log(stdout)
}) */

//spawn invocate a new process and see what happend with that process 

let process = spawn('ls', ['-la'])

/* console.log(process.connected) */

process.stdout.on('data', (data) => {
  console.log(process.killed)
  console.log(data.toString())
})

process.on('exit', () => {
  console.log('the process ends')
})