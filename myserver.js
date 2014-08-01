/* var httpModule=require('http');

httpModule.createServer(function(httpReq,httpRes){
			httpRes.writeHead(200,{'Content-type':'text/plain'});
			httpRes.end('Hello Wecome to Node.Js Http Server Console');
}).listen(1234,'127.0.0.1');

console.log('Webserver started !!'); */


var httpModule=require('http');
var fsModule=require('fs');

httpModule.createServer(function(httpReq,httpRes){
            fsModule.readFile('myIndex.html',function(err,data){
			  
			  httpRes.writeHead(200,{'Content-type':'text/html'});
			  //httpRes.end('Hello Wecome to Node.Js Http Server Console <br/>');
			   httpRes.end(data);
			
			});
         
			
}).listen(1234,'127.0.0.1');

console.log('Webserver started !!')