var express = require('express')
var app = express()
var bodyParser = require('body-parser');

var urlencodedParser= bodyParser.urlencoded({extended: false});
app.set('views', './views')
app.set('view engine', 'ejs')
app.get('/', function(req, res){
   res.render('login',{foo:'login'})
})
app.post('/admin', urlencodedParser, function(req, res){
   let user1= req.body.email;
   let password1= req.body.password;
   if( password1 !== "240311" ){
      //res.send("Hello "+req.body.email)
    res.render('admin',{users:"login in first",show:"Login"} );
   }
   else {
      //res.send("Hello "+req.body.email)
    res.render('admin',{users: "Hello "+user1,show:"Logout"} );
   }
   
});

app.listen(8000)