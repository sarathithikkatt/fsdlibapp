const express = require("express");
const app = new express();

// select available port
const port = process.env.PORT || 3333;

var cors = require("cors");
app.use(cors());

const fs = require("fs");

const upload = require("express-fileupload");
app.use(upload());

// var bodyparser = require("body-parser");
// app.use(bodyparser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const Bookdata = require("./model/Bookdata");
const Accountdata = require("./model/Accountdata");
const Authordata = require("./model/Authordata");


// books page
app.get("/books",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    // access all books in Database
    Bookdata.find()
    .then(function(books){

        res.send(books);
        // console.log(books);

    });

});


 // authors page
 app.get("/authors",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    // access all authors in Database
    Authordata.find()
    .then(function(authors){

        res.send(authors);
        console.log(authors);
        
    });

});


// add an account
app.post("/add",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    console.log(req.body);

    // new account
    var accnt = {
        name : req.body.name,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password
    }

    // pass to AccountSchema
    var account = Accountdata(accnt);

    // save new account to Database
    account.save();
});


// access new book details from AddBook
app.post("/addbook",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    
    // new book
    var item = {
        title : req.body.title,
        author : req.body.author,
        genre : req.body.genre,
        image : req.body.image,
        about : req.body.about
    }

    console.log(req.body);

    if(req.files){

        var file = req.files.image;
        var filename = req.files.image.name;

        // upload image to images-folder
        // file.mv("/assets/images/"+filename,function(err){
        //     if(err){
        //         res.send(err);
        //     }
        // });

    }

    // pass to BookSchema
    var book = Bookdata(item);

    // save new book to Database
    book.save();

    // 
    // res.send(book);

});


// single book page
app.get("/books/:id",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");

    // access id of single book
    const id = req.params.id;

    // find single book in Database
    Bookdata.findOne({_id : id})
    .then(function(book){

        res.send(book);
        
    });

});


// update a book
app.post("/updatebook/:id",(req,res)=>{

    // access id & image of a single book
    const id = req.params.id;
    // var img = req.params.img;

    // if image is updated
    // if(req.files){

    //     // remove curent image
    //     fs.unlink("./public/images/"+img, (err) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //     });

    //     img = req.files.image.name;
    //     var file = req.files.image;

    //     // upload image to images-folder
    //     file.mv("./public/images/"+img,function(err){
    //         if(err){
    //             res.send(err);
    //         }
    //     });
    
    // }
        
    // update book details
    Bookdata.updateOne({_id : id},
        { $set :
            {
                title : req.body.title,
                author : req.body.author,
                genre : req.body.genre,
                image : req.body.image,
                about : req.body.about
            }
        })
    .then(function(book){
        // updated a book
    });


    // update Books page
    // res.redirect("/books");

    // delete a book
    app.get("/delete/:id",(req,res)=>{

        // access id of single book
        const id = req.params.id;
        // var img = req.params.img;

        // find single book in Database
        Bookdata.deleteOne({_id : id})
        .then(function(book){
            // deleted one book from Library

            // remove image
            // fs.unlink("./public/images/"+img, (err) => {
            //     if (err) {
            //         console.log(err);
            //     }
            // });

        });

        // update Books page
        // res.redirect("/books");
        
    });

});

app.listen(port);