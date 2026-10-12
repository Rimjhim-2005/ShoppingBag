const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const {
  getActiveLists,
  createList,
  addItem,
  editItem,
  deleteItem,
  toggleBought,
  markListDone,
} = require("../controllers/listController");

router.get("/", auth, getActiveLists);
router.post("/", auth, createList);
router.post("/:listId/item", auth, addItem);
router.put("/:listId/item/:itemId", auth, editItem);
router.delete("/:listId/item/:itemId", auth, deleteItem);
router.put("/:listId/item/:itemId/toggle", auth, toggleBought);
router.put("/:listId/done", auth, markListDone);

module.exports = router;
