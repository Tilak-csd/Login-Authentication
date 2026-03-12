const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// importing
const {JWT_KEY} = require("../config/config")

const LoginService = async(username, password)=>{

    // Testing with Raw Data
    const user = {id : 122, username : "tilak03", email : "tilakgubhaju03@gmail.com", password : "tilak123"};

    if(username !== user.username && password !== username.password) throw new Error("Invalid Credentails")
        
    const token = jwt.sign(
        {id : user.id},
        JWT_KEY,
        {expiresIn : '1d'}
    )

    return {user, token}
}

module.exports = {LoginService}