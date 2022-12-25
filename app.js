const express=require('express')
const bodyParser=require('body-parser')
const fetch=require('fetch')
const app=express();
const db=require('mongodb')
const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/shop");
const shopSchema=new mongoose.Schema({
    user:'String',
    password:'Number'
})
const Shop=new mongoose.model('Shop',shopSchema)
const shop=new Shop({
    user:'Veera',
    password:1234
})
shop.save(function(){
    console.log('Shop is saved');
})
// const Fetching=()=>{fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data))}
// Fetching();
app.get('/',function(req,res){  
    res.send('<h1>Hello World</h1>')
    shop.save(function(){
        console.log('Shop is saved');
    })
})
app.post('/',function(req,res){  
    res.send('<h1>Hello</h1>');
})
app.listen(5000,function(){
    console.log('server running on 5000');
})