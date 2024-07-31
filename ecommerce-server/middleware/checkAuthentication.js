const jwt = require("jsonwebtoken")

function checkAuthentication(req, res,next) {
    try {
        let token = req.headers.authorization.replace("Bearer ", "")
        const JWT_SECRETE_KEY = "shhhhh"
        const decoded = jwt.verify(token, JWT_SECRETE_KEY)
        let user = decoded
        req.user = user
        next()
       
    } catch {
        return res.status(401).send({
            msg: "unauntenticated",
        })
    }
}

function checkIsSeller(req,res,next){
    console.log("check if seller");
    console.log(req.user);
    if(req.user.role == "seller"){
        next()
    }else{
        res.status(403).send({
            msg:"access denined: only for seller"
        })
    }
}

function checkIsBuyer(req,res,next){
    if(req.user.role == "buyer"){
        next()
    }else{
        res.status(403).send({
            msg:"access denined: only for buyer"
        })
    }
}



module.exports = {
    checkAuthentication: checkAuthentication,
    checkIsSeller

}
