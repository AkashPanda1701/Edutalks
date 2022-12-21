import mongoose from "mongoose";

const accessCourseSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true,
        },
        completed: {
            type: [Number],
            required: true,
        },
    },{
            versionKey: false,
        }
    
);

export default mongoose.models.AccessCourse || mongoose.model("AccessCourse", accessCourseSchema);