// backend/controllers/authController.js

// @desc    Register a new user
// @route   POST /api/auth/register
exports.register = async (req, res) => {
    res.status(200).json({ message: "Register route works" });
};

// @desc    Login user
// @route   POST /api/auth/login
exports.login = async (req, res) => {
    res.status(200).json({ message: "Login route works" });
};

// @desc    Get current user profile
// @route   GET /api/auth/me
exports.getMe = async (req, res) => {
    res.status(200).json({ message: "Get Me route works" });
};