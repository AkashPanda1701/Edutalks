import Referal from "../../../models/referal.model";
import User from "../../../models/user.model";
import connectDB from "../../../middleware/connectDB";


export default async function referal(req, res) {
    if(req.method === 'GET'){
        try {
            await connectDB();
            const { referalCode } = req.query;
            const referal = await Referal.findOne({ referalCode }).select('-userId').populate('referalcount', 'name email subscriptions');
            return res.status(200).send({ referal });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }else{
        return res.status(400).json({message: "Invalid request method"});
    }
}
