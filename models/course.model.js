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
    videos: {
      type: [
        {
          subtitle: String,
          src: String,
          duration: String,
        },
      ],
      required: true,
    },
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