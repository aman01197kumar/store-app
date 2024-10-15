import Store from "../model/store.model.js";

export const getStore = async (req, res) => {
  try {
    const store =await Store.find();
    res.status(200).json(store);
  } catch (err) {
    console.log(err);
    res.status(500).json();
  }
};
