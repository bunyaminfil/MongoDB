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

    db.collection("kitap").deleteOne({ kitap_adi: "Cerrah" }, function (
      err,
      result
    ) {
      if (err) {
        throw err;
      } else {
        console.log("Kayıt Silinmiştir!!");

        db.collection("kitap")
          .find({})
          .toArray(function (err, result) {
            console.log(result);
          });
      }
    });
  }
});
