
const bcrypt  = require("bcrypt")
const signup = (username, email, password) => {
    console.log("signup");
    return;
    // create new user and add to dbUser;
    /* 
        request validation



        user already exits 
        if exists
            send email exists eroor
        else
            create new user 

        exception handling
    
    */

    bcrypt.hash(password, 10, function (err, hash) {
        console.log(hash)
    })
}



module.exports = signup
