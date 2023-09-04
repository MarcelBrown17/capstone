const db = require('../config');
const {hash, compare, hashSync} = require('bcrypt');
const {createToken} = require('../middleware/authenticateUser')

class Users {
    fetchUsers(req, res){
        const query = `
        SELECT userID, firstName, lastName, userRole, emailAdd, userPass, userImage
        FROM Users;`

        db.query(query, (err, results) => {
            if(err) throw err

            res.json({
                status: res.statusCode, 
                results
            });
        });
    }

    fetchUser(req, res){
        const query = `
        SELECT userID, firstName, lastName, userRole, emailAdd, userPass, userImage
        FROM Users 
        WHERE userID = ${req.params.id};`

        db.query(query, (err, result) => {
            if(err) throw err

            res.json({
                status: res.statusCode,
                result
            });
        });
    }

    async register(req, res) {
        const data = req.body;
    
        if (!data) {
            return res.status(400).json({
                status: 400,
                message: "Request body is missing"
            });
        }
    
        try {
            // password encryption
            const saltRounds = 10; //number of salt rounds
            const hashedPassword = await hash(data.userPass, saltRounds);
    
            // Replace the plain password with the hashed password
            data.userPass = hashedPassword;
    
            const user = {
                emailAdd: data.emailAdd,
                userPass: data.userPass
            };
    
            const query = `
            INSERT INTO Users 
            SET ?;`;
    
            db.query(query, [data], (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({
                        status: 500,
                        message: "Internal Server Error"
                    });
                }
    
                // create token
                let token = createToken(user);
    
                res.cookie("AuthorisedUser", token, {
                    maxAge: 3600000, // age of token, 3600000=1 hour
                    httpOnly: true
                });
    
                res.json({
                    status: res.statusCode,
                    message: "New user registered"
                });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 500,
                message: "Internal Server Error"
            });
        }
    }
    
    login(req, res) {
        const { emailAdd, userPass } = req.body;
    
        if (!emailAdd || !userPass) {
            return res.status(400).json({
                status: 400,
                message: "Email and password are required"
            });
        }
    
        // query
        const query = `
        SELECT firstName, lastName, emailAdd, userPass 
        FROM Users 
        WHERE emailAdd = ?;`;
    
        db.query(query, [emailAdd], async (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    status: 500,
                    message: "Internal Server Error"
                });
            }
    
            if (!result?.length) {
                return res.status(401).json({
                    status: 401,
                    message: "Incorrect Email Address"
                });
            } else {
                const storedPasswordHash = result[0].userPass;
    
                try {
                    const passwordMatch = await compare(userPass, storedPasswordHash);
    
                    if (passwordMatch) {
                        // create token
                        const user = {
                            emailAdd,
                            userPass: storedPasswordHash
                        };
                        const token = createToken(user);
    
                        // save token
                        res.cookie("AuthorizedUser",
                            token, {
                                maxAge: 3600000,
                                httpOnly: true
                            });
    
                        res.json({
                            status: res.statusCode,
                            message: "Welcome to Envy Essentials",
                            token,
                            result: result[0]
                        });
                    } else {
                        res.status(401).json({
                            status: 401,
                            message: "Unauthorized user or incorrect password"
                        });
                    }
                } catch (error) {
                    console.error(error);
                    res.status(500).json({
                        status: 500,
                        message: "Internal Server Error"
                    });
                }
            }
        });
    }
    

    updateUser(req, res){
        const query = `
        UPDATE Users 
        SET? 
        WHERE userID = ?`

        const data = req.body;

        // encrypt password 
        data.userPass = hashSync(data.userPass, 20); 

        db.query(query, [data, req.params.id], 
            (err) => {
                if (err) throw err

                res.json({
                    status: res.statusCode, 
                    message: "Updated User Details"
                })
            });
    }

    deleteUser(req, res){
        const query = `
        DELETE FROM Users 
        WHERE userID = '${req.params.id};`

        db.query(query, (err) => {
            if(err) throw err 

            res.json({
                status: res.statusCode, 
                message: "Deleted User"
            });
        });
    }
}

module.exports = Users;