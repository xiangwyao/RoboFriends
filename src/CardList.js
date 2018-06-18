import React from "react";
import Card from "./Card";
import { robots } from "./robots";

const CardList = () => {
  const cardArray = robots.map((user, idx) => {
    return (
      <Card
        id={robots[idx].id}
        name={robots[idx].name}
        email={robots[idx].email}
        key={robots[idx].id}
      />
    );
  });
  return <div>{cardArray}</div>;
};

export default CardList;
