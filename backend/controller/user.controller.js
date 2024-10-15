import User from "../model/user.model.js";
import bcrypt from "bcrypt";
export const getUserData = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ email });
    // Ensure all necessary fields are present
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    if (user)
      return res
        .status(200)
        .json({ message: "User already exists", status: 0 });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();

    res
      .status(200)
      .json({ message: "User registered successfully", status: 200 });
  } catch (err) {
    console.log("Error");
    console.log(err);
    res.status(200).json({ message: "Internal server error", status: 0 });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid email or password", status: 0 });
    }

    // Compare the password
    // const hashedPassword = await bcrypt.hash(password)
    const isMatch = await bcrypt.compare(password, user.password);

    // If passwords do not match
    if (!isMatch) {
      return res
        .status(200)
        .json({ message: "Invalid email or password", status: 400 });
    }

    // Return user data on successful login
    res.status(200).json({
      message: "Login Successful",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
      status: 200,
    });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(200).json({ message: "Internal server error", status: 401 });
  }
};
