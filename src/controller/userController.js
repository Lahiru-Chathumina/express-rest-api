const User = require('../models/userModel'); //file import

exports.addUser = async (req,res)=>{

    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });

    await newUser.save();
    
    res.status(201).json({
         message: 'User added successfully', user: newUser 
        });

}