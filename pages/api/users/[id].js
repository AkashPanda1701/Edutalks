import connectDB from "../../../middleware/connectDB";
import User from "../../../models/user.model";

export default async function getSingleUser(req, res) {
    await connectDB();

    if(req.method === "GET") {
        const { query: { id } } = req;

        try{
            const user = await User.findOne({_id: id}).select({ subscriptions: 0, password: 0, phone: 0}).populate('courses.courseId');
            return res.status(200).send(user);
        }
        catch({message}) {
            return res.status(400).send({ error: true, message })
        }
    }
    else if(req.method === "DELETE") {
        const { query: { id } } = req;

        try{
            await User.findById({ _id: id });
            return res.status(200).send({ id });
        }
        catch({message}) {
            return res.status(400).send({ error: true, message })
        }
    }
}