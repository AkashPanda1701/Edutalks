import connectDB from "../../../middleware/connectDB";
import sendMail from "../../../middleware/mail";
import User from "../../../models/user.model";
import Crypto from 'crypto';
import Referal from "../../../models/referal.model";

const signup = async (req, res) => {
    await connectDB();

   
    if(req.method === 'POST') {
        const { name, email, password, referalCode} = req.body;
        try {

          
            
            const code = Crypto.randomBytes(4).toString('hex');
            
            const user = await User.create({
                name,
                email,
                password,
                subscriptions:{
                    startdate: new Date(),
                    enddate: new Date(),
                },
                referalCode: code

            });
            sendMail(email, name, code);
            await Referal.create({
                referalCode: code,
                userId: user._id,
            });
            if(referalCode){
                const referal = await Referal.findOne({ referalCode});
                if(referal){
                    const user = await User.findById(referal.userId);
                    console.log('user.subscriptions.enddate: ',new Date(user.subscriptions.enddate));


                    user.subscriptions.enddate = new Date(user.subscriptions.enddate.setMonth(user.subscriptions.enddate.getMonth() + 1));
                    console.log('user.subscriptions.enddate: ', new Date(user.subscriptions.enddate));
                     await User.findByIdAndUpdate(user._id, { subscriptions: user.subscriptions });
                     sendMail(user.email, user.name, 1);
                     referal.referalcount.push(user._id);
                    await referal.save();
                }
            }
                
          return res.status(201).json({ 
            message: "User created",
            user: {
                name: user.name,
                email: user.email,
                role: user.role,
                referalCode: user.referalCode,
                subscriptions: user.subscriptions

            }});
        } catch (error) {
          return res.status(400).json({ message : error.message });
        }
    } else {
       return res.status(400).json({message: "Invalid request method"});
    }
}

export default signup;