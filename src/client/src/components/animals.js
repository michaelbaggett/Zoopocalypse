import React from "react";

const TestAnimalCard = React.memo(({ image, name, blanks }) => (
  <div className="container">
    <div className="jumbotron">Ayooooo</div>
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={image} alt="sheep pic" />
      <h5>{name}</h5>
      <p>{blanks}</p>
    </div>
  </div>
));

export default TestAnimalCard;
