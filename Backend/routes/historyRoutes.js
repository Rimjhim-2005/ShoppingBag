const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  getCompletedLists,
  getNotBoughtPool,
  editNotBoughtItem,
  toggleNotBoughtItem,
  deleteNotBoughtItem,
  deleteCompletedList,
  getTotalSpendings,
} = require("../controllers/historyController");

router.get("/completed", auth, getCompletedLists);
router.get("/not-bought", auth, getNotBoughtPool);
router.put("/not-bought/:itemId", auth, editNotBoughtItem);
router.patch("/not-bought/:itemId/toggle", auth, toggleNotBoughtItem);
router.delete("/not-bought/:itemId", auth, deleteNotBoughtItem);
router.delete("/completed/:listId", auth, deleteCompletedList);
router.get("/total-spendings", auth, getTotalSpendings);

module.exports = router;
