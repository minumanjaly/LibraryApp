const express = require("express");
const authersRouter = express.Router();

function router(nav){
    var authors = [
        {
            title:"Paulo Coelho",
            genre: "Brazilian lyricist and novelist",
            img:"paulo.jpg"


        },
        {
            title:"Joseph Barbera",
            genre: "American Animator",
            img:"joseph.jpg"
        },
        {
            title:"J K Rowling",
            genre:"British Author",
            img:"JK.jpg"
        },
        {
            title:"Basheer",
            genre:"Indian Writer",
            img:"Bas.jpg"
        }
    
    ]
    
    authersRouter.get("/",function(req,res){
        res.render("authors",{
            nav,
            title:"Authors",
            authors
    
        });
    
    });
    authersRouter.get("/:id",function(req,res){
        const id = req.params.id
        res.render("author",{
            nav,
            title:"Authors",
            author:authors[id]
    
        });
    
    });
    
    // authersRouter.get("/:id",function(req,res){
    //     const id = req.params.id
    //     res.render("book",{
    //         nav,
    //         title:"Library",
    //         boo:books[id]
    
    //     });
    
    // });

    return authersRouter;

}


module.exports = router;