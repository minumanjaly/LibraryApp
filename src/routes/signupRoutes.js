      /* GET Signup */ 
const express = require("express");
const signupRouter = express.Router();
function router(nav){
    signupRouter.get('/', function(req, res) { 
        res.render('signup', { title: 'Signup Page', 
        nav,
        }); 
    });
    return signupRouter;

}
module.exports = router;