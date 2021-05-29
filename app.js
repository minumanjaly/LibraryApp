const express = require("express");
const app = new express();
const port = process.env.PORT || 5002;
const nav = [
    {
        link:"/books", name:"Books"
    },
    {
        link:"/authors",name:"Authors"
    },
    {
        link:"/addbook",name:"Add Book"
    },
    {
        link:"/addauthor",name:"Add Author"
    },
    {
        link:"/login",name:"login"
    },
    {
        link:"/signup",name:"Sign Up"
    }

];

const booksRouter = require("./src/routes/bookRoutes")(nav)
const authersRouter = require("./src/routes/authorRoutes")(nav)
const loginRouter = require("./src/routes/loginRoutes")(nav)
const signupRouter = require("./src/routes/signupRoutes")(nav)
const authRouter = require("./src/routes/authRoutes")(nav)
const addbookRouter = require("./src/routes/addbookRoutes")(nav)
const addauthorRouter = require("./src/routes/addauthorRoutes")(nav)
app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views","./src/views");
app.use("/books",booksRouter);
app.use("/authors",authersRouter);
app.use("/login",loginRouter);
app.use("/signup",signupRouter);
app.use("/author",authRouter);
app.use("/addbook",addbookRouter)
app.use("/addauthor",addauthorRouter)


app.get("/",function(req,res){
    res.render("index",
    {   nav,
        title:"Library"

    });
    
});


app.listen(port,()=>{console.log("server Reay at" + port)});