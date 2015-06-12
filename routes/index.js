exports.index = function(req,res){
    
  res.render('default', { 
      title: 'Tuor', 
      classname: 'Tuor',
      users: [ "Marjuk"]
  }) ; 
    
    }

  exports.profile =  function(req,res){
    
res.render('default', { 
      title: 'Profile', 
      classname: 'profile'
      
                    }) ; 
                                    }
