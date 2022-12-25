import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      enum: ["free", "paid"],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    videos: [
      {
        subtitle: { type: String, required: true },
        src: { type: String, required: true },
        duration: { type: String, required: true },
      },
    ],
    totalDuration: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  },
  { versionKey: false }
);

export default mongoose.models.Course || mongoose.model("Course", courseSchema);
