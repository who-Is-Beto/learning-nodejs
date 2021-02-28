let suma = 0
console.time('loop')
for (let i = 1; i < 1000000000; i++) {
  suma++
}
console.timeEnd('loop')

function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('terminado')
      resolve()
    }, 5000)
  })
}

console.time('async')
asyncFunction().then(() => {
  console.timeEnd('async')
})

console.time('loop2')
for (let j = 1; j < 10; j++) {
  suma++
}
console.timeEnd('loop2')