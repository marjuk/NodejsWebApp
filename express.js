var express = require('express'); 
var app = express(); 
var routes = require('./routes')

app.set('view engine', 'ejs'); 

app.locals.pagetitle = "Marjuk"; 

app.get('/', routes.index);     
app.get('/profile', routes.profile);     


app.get('*', function(req,res){
    

  res.send( " Bad Route ") ; 
    
    }); 
var server = app.listen(8080, function(){
    
    
    console.log("listening on port: 8080"); 
}); 