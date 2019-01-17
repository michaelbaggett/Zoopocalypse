import React from "react";

function AnimalCard(props) {
  console.log("thisistheanimalcard", props);
  return (
    <div className="container">
      <div className="jumbotron">Ayooooo</div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.image} alt="sheep pic" />
        <h5>{props.name}</h5>
        <p>{props.blanks}</p>
      </div>
    </div>
  );
}

export default AnimalCard;

// <div>
//   {this.state.zooAnimals.map(animal => (
//     <AnimalCard
//       id={animal.id}
//       key={animal.id}
//       name={animal.animal_name}
//       image={animal.image}
//       blanks={animal.blanks}
//     />
//   ))}
// </div>;
