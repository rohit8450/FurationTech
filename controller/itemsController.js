const Items = require("../models/items");


// Create Items
module.exports.createNewItems = async (req, res) => {
    const newItem = new Items(req.body);
  
    try {
      const itemAdded = await newItem.save();
      return res
        .status(200)
        .json({ itemAdded, message: "Item Added successfully" });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };


// GetAllitem
module.exports.getAllItems = async (req, res) => {
  try {
    const items = await Items.find();
    res.json({ itemsList: items, message: "Items List Displayed" });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve items" });
  }
};

// GetSpecific Item
module.exports.getSpecificitems = async (req, res) => {
  try {
    const item = await Items.findById(req.params.id);
    if (item) {
      res.json({ specificItem: item, message: "Specific Item  Displayed" });
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve item" });
  }
};



// Update Item
module.exports.updateItems = async (req, res) => {
  try {
    const updatedItem = await Items.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedItem) {
      res
        .status(200)
        .json({
          updateditem: updatedItem,
          message: "Item Updated successfully",
        });
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update item" });
  }
};


// Delete item
module.exports.deleteItems = async (req, res) => {
  try {
    const deletedItem = await Items.findByIdAndDelete(req.params.id);
    if (deletedItem) {
      res
        .status(200)
        .json({
          deleteItem: deletedItem,
          message: "Item Deleted successfully",
        });
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete item" });
  }
};
