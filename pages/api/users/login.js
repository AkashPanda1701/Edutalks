import connectDB from "../../../middleware/connectDB";
import User from "../../../models/user.model";

export default async function login(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();
      const { email, password } = req.body;
      const user = await User.findOne({ email, password }).select({
        password: 0,
        _id: 0,
      });

      if (user) {
        return res.status(200).json({ message: "User logged in", user: user });
      }

      return res.status(400).json({ message: "Invalid credentials" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
