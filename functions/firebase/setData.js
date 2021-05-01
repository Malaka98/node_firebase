const firebase = require("./firebase_connect")

module.exports = {
    saveData: (req, callback) => {
        let username = new Date().getTime();

        firebase.database().ref("users/"+username.toString()).set({
            temp: req.value1,
            h: req.value2,
            m: req.value3
        })
        callback({"statuscode":200, "message": "Inserted successfully"})
    }
}
