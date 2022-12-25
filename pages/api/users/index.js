import User from "../../../models/user.model";
import Course from "../../../models/course.model";
import connectDB from "../../../middleware/connectDB";

export default async function user(req, res) {
    await connectDB();

    if (req.method === "POST") {
        return addCourse(req, res);
    }

    if (req.method === "GET") {
        return getUsers(req, res)
    }
}

async function addCourse(req, res) {
    try {
        const { userId, courseId, videoNo } = req.body;
        console.log('userId: ', userId);

        let user = await User.findOne({ _id: userId }).populate('courses.courseId')
        console.log('user: ', user);
        let flag = false;
        user.courses.map((course) => {
            if (course.courseId._id.toString() === courseId) {
                if (videoNo >= 0) {
                    course.completed.includes(videoNo) ? null : course.completed.push(videoNo);
                }
                flag = true;
            }
        });
        if (!flag) {
            user.courses.push({ courseId, completed: [] })
        }
        // save and populate the user
        user = await user.save();
        user = await User.findOne({ _id: userId }).populate('courses.courseId')
        return res.status(200).send({ message: "Video added successfully", user });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

async function getUsers(req, res) {
    try {
        const users = await User.find({}).select({ subscriptions: 0, password: 0, phone: 0 })
        return res.status(200).send({ users });
    }
    catch ({ message }) {
        return res.status(400).send({ error: true, message });
    }
}