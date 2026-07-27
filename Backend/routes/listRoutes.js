const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  getActiveList,
  addItem,
  editItem,
  deleteItem,
  toggleBought,
  markListDone,
} = require("../controllers/listController");

router.get("/", auth, getActiveList);
router.post("/item", auth, addItem);
router.put("/item/:itemId", auth, editItem);
router.delete("/item/:itemId", auth, deleteItem);
router.put("/item/:itemId/toggle", auth, toggleBought);
router.put("/done", auth, markListDone);

module.exports = router;
