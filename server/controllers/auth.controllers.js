const {RegisterService, LoginService} = require('../services/auth.services')


const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // 1. Basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ 
                message: "Username, email, and password are required." 
            });
        }

        // 2. Call service to handle DB logic and hashing
        const newUser = await RegisterService({ username, email, password });

        // 3. Return success (excluding the password)
        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email
            }
        });

    } catch (error) {
        console.log(error);
        
        // Handle unique constraint errors (e.g., email already taken)
        res.status(400).json({ 
            message: error.message || "Registration failed" 
        });
    }
};


const login = async (req, res)=>{
    try {
        const {username , password} = req.body;

        if(!username || !password){
            return res.status(400).json({
                message : "All fields are required."
            });
        };

        const {user, token} = await LoginService(username, password);

        res.status(200).json({
            message : "Login Successful",
            token,
            user : {id : user.id, username : user.username, email : user.email}
        })
        
    } catch (error) {
        res.status(401).json({ message: error.message || "Invalid credentials" });
    }
}

module.exports = {register, login}