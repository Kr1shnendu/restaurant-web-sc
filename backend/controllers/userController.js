import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

// login user
const loginUser = async (req, res) => {
    const {phone,password} = req.body;
    try {
        const user = await userModel.findOne({phone});

        if(!user) {
            return res.json({
                success: false,
                message: "User doesn't exist..."
            });
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) {
            return res.json({
                success: false,
                message: "Wrong password..."
            });
        }

        const token = createToken(user._id);

        return res.json({
            success: true,
            token
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        });
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// register user
const registerUser = async (req, res) => {
    const {name,password,phone} = req.body;
    try {
        // check if user already exists
        const exists = await userModel.findOne({phone});
        if(exists) {
            return res.json({
                success: false,
                message: "User already exists"
            })
        }

        // validating contact number & password
        /*   */
        if(password.length<6) {
            return res.json({
                success: false,
                message: "Please enter a strong password"
            })
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name: name,
            phone: phone,
            password: hashedPassword
        });
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({
            success: true,
            token
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error"
        })
    }
}

export { loginUser, registerUser };
