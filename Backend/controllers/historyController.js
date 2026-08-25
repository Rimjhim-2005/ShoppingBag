const List = require("../model/listModel");
const NotBoughtItem = require("../model/notBoughtModel");

module.exports.getCompletedLists = async (req, res) => {
  try {
    const lists = await List.find({
      user: req.user._id,
      status: "completed",
    }).sort({ updatedAt: -1 });
    res.status(200).json(lists);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching history", error: err.message });
  }
};

module.exports.getNotBoughtPool = async (req, res) => {
  try {
    const items = await NotBoughtItem.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(notBoughtItems);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching not-bought items", error: err.message });
  }
};

module.exports.editNotBoughtItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { itemName, quantity, price } = req.body;

    const item = await NotBoughtItem.findOne({
      _id: itemId,
      user: req.user._id,
    });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    if (itemName !== undefined) item.itemName = itemName;
    if (quantity !== undefined) item.quantity = quantity;
    if (price !== undefined) item.price = price;

    await item.save();
    res.status(200).json(item);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error editing not-bought item", error: err.message });
  }
};

module.exports.toggleNotBoughtItem = async (req, res) => {
  try {
    const { itemId } = req.params;

    const item = await NotBoughtItem.findOne({
      _id: itemId,
      user: req.user._id,
    });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (!item.isBought && (item.price === undefined || item.price === null)) {
      return res
        .status(400)
        .json({ message: "Cannot mark item as done without a price" });
    }
    item.isBought = !item.isBought;
    await item.save();
    res.status(200).json(item);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating not-bought item", error: err.message });
  }
};

module.exports.deleteNotBoughtItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    await NotBoughtItem.findOneAndDelete({ _id: itemId, user: req.user._id });
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting not-bought item", error: err.message });
  }
};

module.exports.deleteCompletedList = async (req, res) => {
  try {
    const { listId } = req.params;
    await List.findOneAndDelete({
      _id: listId,
      user: req.user._id,
      status: "completed",
    });
    res.status(200).json({ message: "Completed list deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting completed list", error: err.message });
  }
};

module.exports.getTotalSpendings = async (req, res) => {
  try {
    const completedLists = await List.find({
      user: req.user._id,
      status: "completed",
    });
    const completedTotal = completedLists.reduce(
      (sum, list) => sum + (list.total || 0),
      0,
    );
    const boughtExtras = await NotBoughtItem.find({
      user: req.user._id,
      isBought: true,
    });
    const extraTotal = boughtExtras.reduce(
      (sum, item) => sum + (item.price || 0),
      0,
    );

    res.status(200).json({
      completedTotal,
      extraTotal,
      grandTotal: completedTotal + extraTotal,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error calculating total spendings",
      error: err.message,
    });
  }
};
