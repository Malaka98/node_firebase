const firebase = require("firebase")

const app = firebase.initializeApp({
    apiKey: "AIzaSyBr7b5cdAv5jWEAQAeYcWuk1BGHhhXRvpU",
    authDomain: "my-app-47609.firebaseapp.com",
    databaseURL: "https://my-app-47609-default-rtdb.firebaseio.com",
})

module.exports = app