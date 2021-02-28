//just exectute $node --inspect <file>
//then in the browser write chrome/inspect and should be a link to see to inspect your 
//nodejs program with google devtools

const http = require('http')

const router = (request, response) => {
  console.log('new request')
  console.log(request.url)

  switch (request.url) {
    case '/hola':
      response.write('HolAAAA')
      response.end()
    default:
      response.write('<h1>404 NOT FOUND</h1>')
      response.end()
  }

  /*   response.write('Hello now I know how to use http in NodeJs')
    response.writeHead(201, {
      'Content-Type': 'text/plain'
    })
  
    response.end() */
}

http.createServer(router).listen(3000)


console.log('listening http in 3000 port')