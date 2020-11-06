var MongoDB = require("mongodb").MongoClient;

MongoDB.connect("mongodb://127.0.0.1:27017/Mongo", function (error, db) {
  if (error) {
    throw error;
    console.log("Baglanti Saglanamadi!!!");
  } else {
    console.log("Baglanti Saglandi!!!!");

    var kitap = {
      kitap_adi: "Cerrah",
      basim_yili: 2008,
      yazar: "Tess Gerritsen",
      yayin_evi: "Bilinmiyor",
    };

    db.collection("kitap").insertOne(kitap, function (err, result) {
      if (err) {
        throw err;
        console.log("Kaydedilemedi!!!");
      } else {
        console.log("Kaydetme işlemi başarılıdır!!");
      }
    });
  }
});
