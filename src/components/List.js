import React from "react";
import { capitalize } from "../utils/helper";

const List = () => {
  // Here is where you can write Javascript code
  const fruits = ["apPlE", "baNaNa", "pineApple", "orANge"];

  // Return some JSX
  return (
    <div className="fruitsList">
      <ul>
        {fruits.map((fruit) => (
          <li>{capitalize(fruit)}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
