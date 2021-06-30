import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
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
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
