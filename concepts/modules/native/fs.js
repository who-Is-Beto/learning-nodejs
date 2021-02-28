const fs = require('fs')

function reed(route, callback) {
  fs.readFile(route, (err, data) => {
    callback(data.toString())
  })
}

function write(route, content, callback) {
  fs.writeFile(route, content, (err) => {
    if (err) {
      console.error('I can not write that ):', err)
    } else {
      callback('It has been wrote correctly')
    }
  })
}

function Delete(route, callback) {
  fs.unlink(route, callback)
}
write(__dirname + '/file1.txt', 'Im a new file, hello', console.log)
reed(__dirname + '/file1.txt', console.log)
/* Delete(__dirname + '/file1.txt', console.log) */

