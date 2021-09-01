import "./styles.css";
import React, { useState } from "react";

const foodData = {
  Assamese: [
    {
      name: "Chicken Curry with Bamboo Shot",
      description: "Chicken boiled with shoots of bamboo.",
      rating: "4/5"
    },
    {
      name: "Mass Tenga",
      description: "Fish cooked in tangy flavour from Tomato",
      rating: "3.5/5"
    },
    {
      name: "Aloo Pitika",
      description: "Roasted potato meshed with onion,chilli and tomato",
      rating: "5/5"
    }
  ],

  Nagaland: [
    {
      name: "Axone",
      description:
        "It is a fermented soybean product commonly used in Naga cuisine.",
      rating: "5/5"
    },
    {
      name: "Pork with dry bamboo shoot",
      description: "Smoked pork meat cooked in bamboo shot.",
      rating: "4.5/5"
    },
    {
      name: "Eel Chili Sauce",
      description: "Dry eel pounded with lots of chilies, garlic, and salt.",
      rating: "4.5/5"
    }
  ],
  Manipur: [
    {
      name: "Chamthong",
      description:
        "It consists of seasonal vegetables that are boiled and flavoured.",
      rating: "3.5/5"
    },
    {
      name: "Nga Atauba Thongba",
      description: "Fish is flavoured with crushed pepper and other spices.",
      rating: "5/5"
    },

    {
      name: "Alu Kangmet",
      description:
        "Boiled potatoes are mashed wonderfully and mixed with fried red chilli, salt and drizzles of mustard oil.",
      rating: "4.5/5"
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
      <div style={{ textAlign: "left", padding: "30px" }}>
        <ul>
          {foodData[selectedState].map((food) => (
            <li key={food.name}>
              <div style={{ fontSize: "22px" }}> {food.name} </div>
              <div style={{ fontSize: "12px" }}>{food.description}</div>
              <div style={{ fontSize: "16px" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
