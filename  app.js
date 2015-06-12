var http = require('http'); //adding the http module

var myServer = http.createServer(function(request, response) {

 response.writeHead(200, { "content-type" : "text/plain" }); // telling the client what type of files to be sent from the server 

 response.write(" Putki mar "); 
 
 response.end(); 
 
}); //creating a Server 


myServer.listen(8080); 