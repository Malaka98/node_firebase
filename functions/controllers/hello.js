const ofirebase = require("../firebase/setData")

exports.hello = (req, res) => {
  res.send("Hello world");
};

exports.hello2 = async (req, res) => {
  try {
    await ofirebase.saveData(req.body, (data) => {
      res.send(data);
    });
  } catch (error) {
    res.send(error.message)
  }
};