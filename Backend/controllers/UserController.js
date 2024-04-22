const User = require('../modals/UserModal')
const mongoose = require('mongoose')
const sendMessage = require('../utils/sendMsg')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv') 

dotenv.config() ;

function createOtp() {
    let otp = Math.floor(Math.random() * (999999 - 0 + 1)) + 0;
    otp = otp.toString();
    for (let i = otp.legnth; i < 6; i++) {
        otp.push('0');
    }
    return otp;
}

const createJwt = (req , res , next)=>{
    const token = jwt.sign(req.body.id , process.env.SECRET, {
        expiresIn : process.env.JWT_EXPIRY
    })
    res.cookie('jwt' , token, {
        maxAge : 24 * 3600 , 
        httpOnly : true , 
    })
}

exports.loginUser = async (req, res, next) => {
    try {
        const phoneNumber = req.body.phoneNumber
        let user = await User.findOne({
            phoneNumber
        });
        if (!user) {
            user = await User.create({
                phoneNumber: phoneNumber
            })
        }

        otp = createOtp()
        sendMessage(otp);

        user.otp = otp ; 
        await user.save() ; 

        res.status(200).json({
            status: 'Success',
            data: {...user , otp : undefined}
        })

    } catch (err) {
        console.log("Error occured while loggin in user");
    }
}



exports.verifyUser = async(req , res , next)=>{
    try {
        const userOtp = req.body.otp ; 
        const user = await User.findById(req.body.id) ;
        if(userOtp !== user.otp || Date.now() > user.timeToLive){
            res.status(401).json({
                status : 'Fail' , 
                message : `It's over 10 minutes now so otp is invalid or your otp is incorrect `
            })
        }

        createJwt(req , res , next)

        res.status(200).json({
            status: 'Success' , 
            data : user
        })
    }
    catch(err){
        console.log("Error while verify the otp")
    }
}

exports.signUpUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.body.id, {
            fullName: req.body.fullName
        })

        res.status(200).json({
            status: 'Success',
            message: 'You are successfully signed up and logged in',
        })
    } catch (err) {
        console.log("Error occured while signup up")
    }
}