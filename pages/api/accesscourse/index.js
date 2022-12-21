import User from "../../../models/user.model";
import AccessCourse from "../../../models/accessCourse.model";
import Course from "../../../models/course.model";
import connectDB from "../../../middleware/connectDB";

export default async function accesscourse(req, res) {
    await connectDB();
    if (req.method === "GET") {
        try {
            const AccessCours = await AccessCourse.find().populate('userId', 'name email').populate('courseId', 'title slug type videos totalDuration description');
            return res.status(200).send({ AccessCours });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    if (req.method === "POST") {
        try {
            const { userId, courseId ,videoNo} = req.body;

           const accessCourse = await AccessCourse.findOne({ userId ,courseId});
              if(accessCourse){ 
                accessCourse.completed.push(videoNo);
                await accessCourse.save();
                return res.status(200).send({ message: "Video added to completed list" });
                }else{
                    const accessCourse = await AccessCourse.create({
                        userId,
                        courseId,
                        completed:[videoNo]
                    });
                    return res.status(201).send({ message: "Video added to completed list" });
                }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}