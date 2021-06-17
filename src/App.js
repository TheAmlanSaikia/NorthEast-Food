import "./styles.css";
import React, { useState } from "react";

const foodData = {
  Assamese: [
    { name: "Chicken Curry with Bamboo Shot", rating: "4/5" },
    { name: "Mass Tenga", rating: "3.5/5" }
  ],

  Nagaland: [
    {
      name: "Axone",
      rating: "5/5"
    },
    {
      name: "Pork with dry bamboo shoot",
      rating: "4.5/5"
    }
  ],
  Manipur: [
    {
      name: "Chamthong",
      rating: "3.5/5"
    },
    {
      name: "Nga Atauba Thongba",
      rating: "5/5"
    }
  ]
};

export default function App() {
  var [selectedState, setselectedState] = useState("Assamese");

  function genreclickHandler(state) {
    setselectedState(state);
  }

  var selectedArray = Object.keys(foodData);

  return (
    <div className="App">
      <h1>
        Food Delicacy<span role="img">🍲</span>
      </h1>
      <p>Explore some foods of North-East India</p>
      <div style={{ backgroundColor: "#EDF2F7", padding: "20px" }}>
        {selectedArray.map((state) => (
          <button onClick={() => genreclickHandler(state)} key={state}>
            {state}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left", padding: "20px" }}>
        <ul>
          {foodData[selectedState].map((food) => (
            <li key={food.name}>
              <div style={{ fontSize: "22px" }}> {food.name} </div>
              <div style={{ fontSize: "16px" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
