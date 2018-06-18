import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
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
