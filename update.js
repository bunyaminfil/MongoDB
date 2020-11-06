var MongoDB = require("mongodb").MongoClient;

MongoDB.connect("mongodb://127.0.0.1:27017/Mongo", function (error, db) {
  if (error) {
    throw error;
    console.log("Baglanti Saglanamadi!!!");
  } else {
    console.log("Baglanti Saglandi!!!!");

    var newData = {
      kitap_adi: "PHP Codeigniter Framework",
      basim_yili: 2017,
      yazar: "Gökhan Kandemir",
      yayin_evi: "Dikeyeksen Dağıtımcılık",
    };

    db.collection("kitap")
      .find({})
      .toArray(function (err, rows) {
        console.log(rows);
      });

    // Where, new data, callback
    db.collection("kitap").update(
      { yayin_evi: "Dikeyeksen" },
      newData,
      function (err, result) {
        if (err) {
          throw err;
          console.log("hata olustu!!");
        } else {
          console.log("updated");

          db.collection("kitap")
            .find({})
            .toArray(function (err, rows) {
              console.log(rows);
            });
        }
      }
    );
  }
});
