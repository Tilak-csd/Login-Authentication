const {LoginService} = require('../services/auth.services')


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

module.exports = {login}