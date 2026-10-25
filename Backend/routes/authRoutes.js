const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  getProfile,
  updateProfile,
} = require("../controllers/authController");
const auth = require("../middlewares/authMiddleware");

router.get("/profile", auth, getProfile);
router.put("/profile", auth, updateProfile);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
