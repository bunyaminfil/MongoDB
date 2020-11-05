var MongoDB = require("mongodb").MongoClient;

MongoDB.connect("mongodb://127.0.0.1:27017/Mongo", (error, db) => {
  if (error) {
    throw error;
    console.log("Connection failed!");
  } else {
    console.log("Connection successful");
  }
});
