const express = require("express");
const booksRouter = express.Router();

function router(nav){
    var books = [
        {
            title:"The Alchemist",
            author:"Paulo Coelho",
            genre:"Novel",
            img:"alche.jpg"

        },
        {
            title:"Tom and Jerry",
            author:"Joseph Barbera",
            genre:"Cartoon",
            img:"Tom.jpg"
        },
        {
            title:"Harri Ptter",
            author:"J K Rowling",
            genre:"Fantasy",
            img:"harri.jpg"
        },
        {
            title:"Pathummayude Aadu",
            author:"Basheer",
            genre:"Drama",
            img:"basheer.jpg"
        }
    
    ]
    
    booksRouter.get("/",function(req,res){
        res.render("books",{
            nav,
            title:"Books",
            books
    
        });
    
    });
    
    booksRouter.get("/:id",function(req,res){
        const id = req.params.id
        res.render("book",{
            nav,
            title:"Library",
            book:books[id]
    
        });
    
    });


    return booksRouter;

}






module.exports = router;