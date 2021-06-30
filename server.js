const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "Min-Woo",
      birthday: "951215",
      gender: "Male",
      job: "students",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "Ji-Won",
      birthday: "970101",
      gender: "Female",
      job: "students",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "Yu-Min",
      birthday: "981234",
      gender: "Female",
      job: "office worker",
    },
    {
      id: 4,
      image: "https://placeimg.com/64/64/4",
      name: "Kyeong-Hoon",
      birthday: "961234",
      gender: "Male",
      job: "students",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
