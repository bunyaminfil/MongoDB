var MongoDB = require("mongodb").MongoClient;

MongoDB.connect("mongodb://127.0.0.1:27017/Mongo", function (error, db) {
  if (error) {
    throw error;
    console.log("Baglanti Saglanamadi!!!");
  } else {
    console.log("Baglanti Saglandi!!!!");

    db.collection("kitap")
      .find({})
      .toArray(function (err, result) {
        console.log(result);
      });
  }
});
