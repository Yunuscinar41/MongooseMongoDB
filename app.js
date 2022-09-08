const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Where's the name ?"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const People = mongoose.model("People", peopleSchema);

const fruit = new Fruit({
  name: "Ban",
  rating: 9,
  review: "Pretty solid as a fruit",
});

const pineapple = new Fruit({
  name: "pineapple",
  score: 9,
  review: "Great Fruit!",
});

const greenApple = new Fruit({
  name: "Green Apple",
  rating: 8,
  review: "It's healty you know",
});

const people = new People({
  name: "Meriç",
  age: 21,
  favouriteFruit: pineapple,
});

// greenApple.save();
// pineapple.save();
// fruit.save();
// people.save();

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne(
//   { _id: "6319bd7107c46508bff2984d" },
//   { name: "Dragon Fruit" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Updated Successfully");
//     }
//   }
// );

// Fruit.deleteOne({ name: "Dragon Fruit" }, function (err) {
//   if (err) return err;
//   else "Deleted Successfully";
// });

// People.deleteMany({ name: "Yunus Emre" }, function (err) {
//   if (err) return err;
//   else "Successfully Deleted";
// });

People.updateOne(
  { _id: "6319cb420f354bd062547aa0" },
  { favouriteFruit: greenApple },
  function (err) {
    if (err) return err;
    else console.log("Updated!");
  }
);
