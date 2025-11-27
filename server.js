const express = require('express');
const app = express();
const path  = require('path');


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/',function(req,res){
    res.render('register');
})



app.listen(3000,function(){
    console.log("server is running on 3000...")
})