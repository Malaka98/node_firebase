const ofirebase = require("../firebase/setData")

exports.hello = (req, res) => {
  res.send("Hello world");
};

exports.hello2 = (req, res) => {
  ofirebase.saveData(req.body, (data) => {
    res.send(data);
  });
};