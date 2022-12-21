import mongoose from "mongoose";

const referalSchema = new mongoose.Schema({
    referalCode: {
        type: String,
        required: true,
        unique: true,
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    referalcount: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ]
},{
    versionKey: false,
}
);

export default mongoose.models.Referal || mongoose.model("Referal", referalSchema);