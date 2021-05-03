// const ofirebase = require("../firebase/setData");
const firebase = require("../firebase/firebase_connect");

exports.hello = async (req, res) => {
  let data = {}
  await firebase.database().ref('/users').once('value').then((snapshot) => {
    data = snapshot.val()
  })
  res.json(data)
};

exports.hello2 = async (req, res) => {
  try {
    let username = new Date().getTime();

      await firebase.database().ref("users/"+username.toString()).set({
            temp: req.body["value1"],
            h: req.body["value2"],
            m: req.body["value3"]
        })
      res.send("save Data")
  } catch (error) {
    res.send(error.message)
  }
};