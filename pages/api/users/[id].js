import connectDB from "../../../middleware/connectDB";
import User from "../../../models/user.model";
import Referal from "../../../models/referal.model";

export default async function getSingleUser(req, res) {
    await connectDB();

    // if(req.method === "GET") {
    //     const { query: { id } } = req;

    //     try{
    //         const user = await User.findOne({_id: id}).select({ subscriptions: 0, password: 0, phone: 0}).populate('courses.courseId');
    //         return res.status(200).send(user);
    //     }
    //     catch({message}) {
    //         return res.status(400).send({ error: true, message })
    //     }
    // }
    if (req.method === "DELETE") {
        const { query: { id } } = req;

        try {
            const user = await User.findOne({ _id: id });
            await Referal.findOneAndDelete({ referalCode: user.referalCode });
            await User.findByIdAndDelete({ _id: id });
            return res.status(200).send("User and referal removed!");
        }
        catch ({ message }) {
            return res.status(400).send({ error: true, message })
        }
    } else {
        return res.status(400).json({ message: "Invalid request method" });
    }
}