import Course from "../../../models/course.model";
import connectDB from "../../../middleware/connectDB";

export default async function courses(req, res) {
    await connectDB();
    if (req.method === "GET") {
        try {
        const courses = await Course.find();
        return res.status(200).send({ courses });
        } catch (error) {
        return res.status(400).json({ message: error.message });
        }
    }

    if(req.method === 'POST'){
        try {
            const { title, slug, type, videos, totalDuration, description } = req.body;

            const course = await Course.create({
                title,
                slug,
                type,
                videos,
                totalDuration,
                description
            });
            return res.status(201).send({ message: "Course created", course: course });
            
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }else{
        return res.status(400).json({message: "Invalid request method"});
    }
    }