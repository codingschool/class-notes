//Lets require/import the HTTP module
var http = require('http');
var url = require('url');

//Lets define a port we want to listen to
var PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
	var parts = url.parse(request.url, true);
	var query = parts.query;

	response.setHeader("Content-Type", "text/html");
    response.end('<form><input name="thename"><button>go</button></form> ' + ' Hello ' + query.thename);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});