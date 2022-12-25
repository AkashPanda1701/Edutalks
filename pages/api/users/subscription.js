import User from "../../../models/user.model";
import connectDB from "../../../middleware/connectDB";
import sendMail from "../../../middleware/mail";

export default async function subscription(req, res) {
    await connectDB();
    if (req.method === "POST") {
        const { email,month } = req.body;
        console.log('req.body: ', req.body);
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "User does not exist" });
            }

            // UPDATE SUBSCRIPTION END DATE
            console.log('enddate:before ', new Date(user.subscriptions.enddate));
            user.subscriptions.enddate = new Date(user.subscriptions.enddate).setMonth(new Date(user.subscriptions.enddate).getMonth() + (+month));

            await User.findByIdAndUpdate(user._id, { subscriptions: user.subscriptions });
            sendMail(email, user.name, month);
            return res.status(201).send({message : "Subscription updated" , user: {

                name: user.name,
                email: user.email,
                role: user.role,
                referalCode: user.referalCode,
                subscriptions: user.subscriptions

            } });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}

