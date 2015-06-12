var express = require('express'); 
var app = express(); 

app.set('view engine', 'ejs'); 

app.get('/', function(req,res){
    
  res.render('default', { 
      title: 'Tuor', 
      classname: 'Tuor',
      users: [ "Marjuk"]
  }) ; 
    
    }); 

app.get('/profile', function(req,res){
    
res.render('default', { 
      title: 'Profile', 
      classname: 'profile'
      
                    }) ; 
                                    }); 
    


app.get('*', function(req,res){
    

  res.send( " Bad Route ") ; 
    
    }); 
var server = app.listen(8080, function(){
    
    
    console.log("listening on port: 8080"); 
}); 