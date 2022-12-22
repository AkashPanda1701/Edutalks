import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    subscriptions: {
        startdate: {
            type: Date,
            required: true,
        },
        enddate: {
            type: Date,
            required: true,
        },
    },
    referalCode: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {

        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        enum: ["user", "admin", "creator"],
        default: "user",
    },
    courses: [
        {
            courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
            completed: [Number],
        },
    ],
}, {
    versionKey: false,
}
);

export default mongoose.models.User || mongoose.model("User", userSchema);