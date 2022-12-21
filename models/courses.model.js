import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
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
          link: String,
          duration: String,
        },
      ],
      required: true,
    },
    totalDuration: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.models.Course || mongoose.model("Course", courseSchema);
