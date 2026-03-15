const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// importing
const {JWT_KEY} = require("../config/config")
const db = require('../config/db')

// New User Register database Connection
const RegisterService = async({username, email, password}) =>{
    
    // 1. If User already exist in the System
    const checkUserQuery = 'SELECT * FROM users WHERE email = $1 OR username = $2';
    const existingUser = await db.query(checkUserQuery, [email, username]);

    if(existingUser.rows.length > 0){
        throw new Error("User with this will or usename already exists.")
    }

    // 2. Hash the Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Insert into NeonDB
    const insertQuery = `
    INSERT INTO users (username, email, password)
    VALUES ($1, $2, $3)
    RETURNING id, username, email
    `;
    const res = await db.query(insertQuery, [username, email, hashedPassword])

    return res.rows[0];
}


// Login Service database connection
const LoginService = async(username, password)=>{

    const FindUserQuery = 'SELECT * FROM users WHERE username = $1';
    const res = await db.query(FindUserQuery, [username]);
    const user = res.rows[0]

    if(!user) throw new Error("Invalid Username or Password");

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) throw new Error("Invalid Username or Password");
        
    const token = jwt.sign(
        {id : user.id, email : user.username},
        JWT_KEY,
        {expiresIn : '1d'}
    )

    return {user, token}
}

module.exports = {RegisterService, LoginService}