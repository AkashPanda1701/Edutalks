import connectDB from "../../../middleware/connectDB";
import User from "../../../models/user.model";
import Referral from "../../../models/referal.model";

export default async function getSingleUser(req, res) {
    await connectDB();

    if(req.method === "GET") {
        const { query: { id } } = req;

        try{
            const user = await User.findOne({_id: id}).select({ subscriptions: 0, password: 0, phone: 0});
            return res.status(200).send(user);
        }
        catch({message}) {
            return res.status(400).send({ error: true, message })
        }
    }
    else if(req.method === "DELETE") {
        const { query: { id } } = req;

        try{
            const user = await User.findByIdAndDelete({ _id: id });
            await Referral.findByIdAndDelete({ referalCode: user.referalCode });
            return res.status(200).send("User and referal removed!");
        }
        catch({message}) {
            return res.status(400).send({ error: true, message })
        }
    }
}