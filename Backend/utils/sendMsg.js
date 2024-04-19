const dotenv = require('dotenv');
dotenv.config() ; 

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_ID;
const client = require('twilio')(accountSid, authToken);

const sendMessage = async function(otp){
    try{
        
        
        const res = await  client.messages
        .create({
            body: `Your OTP is ${otp} for loggin in Contact App. It is valid only for next 10 minutes `,
            from: `+18482223292`,
            to: '+917027774921'
        })
        console.log(res.sid) ; 
    }
    catch(err){
        console.log(err) ; 
    }
}

module.exports = sendMessage