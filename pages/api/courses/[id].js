import Course from "../../../models/course.model";
import connectDB from "../../../middleware/connectDB";

export default async function courses(req, res) {
    await connectDB();
    if (req.method === "GET") {
        try {
            const { id :slug } = req.query;
        const course = await Course.findOne({ slug });

        return res.status(200).send({ course });
        } catch (error) {
        return res.status(400).json({ message: error.message });
        }
    }

    if(req.method === 'PUT'){
        try {
            const { title, slug, type, videos, totalDuration, description } = req.body;
            const { query: { id } } = req;

            const course = await Course.findByIdAndUpdate(id, {
                title,
                slug,
                type,
                videos,
                totalDuration,
                description
            });

           
            return res.status(201).send({ message: "Course updated", course: course });
            
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
    if(req.method === 'DELETE'){
        try {
            const {id} = req.query;

            const course = await Course.findByIdAndDelete(id);

           
            return res.status(201).send({ message: "Course deleted", course: course });
            
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }

    if(req.method === "PATCH") {
        try{
            const { title, type, totalDuration } = req.body;
            const { id } = req.query;

            await Course.findByIdAndUpdate(id,{
                title,
                type,
                totalDuration
            })
            return res.status(200).send("Course updated!");
        }
        catch({message}) {
            return res.status(200).send({error: true, message});
        }
    }

    else{
        return res.status(400).json({message: "Invalid request method"});
    }
    }
