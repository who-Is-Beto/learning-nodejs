process.on('beforeExit', () => {
  console.log('the process is going to end')
})

process.on('exit', () => {
  console.log('see ya ')
})

process.on('uncaughtException', (error, location) => {
  console.error('Exist the error', error, 'on', location)
})

thisFuncitonDoesNotExist()

process.on('uncaughtRejection', (error, location) => {
  console.log('exist a rejct of a promisse on', location)
})