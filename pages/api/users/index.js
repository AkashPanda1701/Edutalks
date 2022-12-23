import User from "../../../models/user.model";
import Course from "../../../models/course.model";
import connectDB from "../../../middleware/connectDB";

export default async function user(req, res) {
    await connectDB();

    if (req.method === "POST") {
        addCourse(req, res);
    }
}

async function addCourse(req, res) {
    try {
        const { userId, courseId, videoNo } = req.body;

        let user = await User.findOne({ userId }).populate('courses.courseId')
        let flag = false;
        user.courses.map((course) => {
            if (course.courseId._id.toString() === courseId) {
                if (videoNo>=0) {
                    course.completed.includes(videoNo) ? null : course.completed.push(videoNo);
                }
                flag = true;
            }
        });
        if (!flag) {
            user.courses.push({ courseId, completed: [] });
        }
        await user.save();
        return res.status(200).send({ message: "Video added successfully", user });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}