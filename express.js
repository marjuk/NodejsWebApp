var express = require('express'); 

var app = express(); 

app.set('view engine', 'ejs'); 

//app.set('views', __dirname + '/nameofyour choosing directory'); if I want to change the name of the directory to keep the ejs files. Say I don't want them to stay in the /views folder. 


app.get('/', function(req, res){
    
res.render('default', { 
    title: 'Home',
    className: 'home',

    users: ["Marjuk", "Reza", "Marzuq", "Fahim", "Sauro"]
    
                      }); 
                            }); 

app.get('/profile', function(req, res){
    
res.render('default', { 
    title: 'Your Profile',
    className: 'profile',
    
                    });     
                                     }); 

app.get('/users/:name?', function(req, res){
    
    var name = req.params.name; 
    
   res.send(name + "was here"); 
    
    }); 

app.get('/users/:name?/:title', function(req, res){
    
   var name = req.params.name; 
   var title = req.params.title; 
    
    res.send("<p> Name" + name + "<br /> title:" + title + "was here"); //
    
    }); 

app.get('*', function(req, res){
    

    res.send(" Bad Route " ); 
    
    
}); 


var server = app.listen(8080, function() {
    
    console.log("listening on port 8080"); 
}); 