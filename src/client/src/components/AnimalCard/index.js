import React, { Component } from "react";
import bar from "../../images/cageBars.png";

export class AnimalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barsVisible: props.animal.split("").map(e => true),
      name: props.animal.split("").map(e => "_ "),
      letters: [],
      guessLog: [],
      targetPosition: 0
    };
  }

  onKeyUp = event => {
    const word = this.props.animal; // word to guess
    const letters = [...this.state.letters]; // total letters guessed
    const guessLog = [...this.state.guessLog]; // incorrect guesses
    const barsVisible = [...this.state.barsVisible];
    //event.key.touppercase is making the letter pressed uppercase and pusing to the letters array in the state
    const key = event.key.toUpperCase();

    // is this a valid key or not?
    // check barsVisible and start at the first true
    if (barsVisible) {
      if (key === word[this.state.targetPosition]) {
      }
      //    compare the first letter of the word to the user key pressed
      //    if incorrect - add to the guessLog and display in the appropriate <h3>
      //    if correct - replace the "_" with the correct letter and update barsVisible = false
    }

    letters.push(key);
    this.setState({ letters, guessLog, barsVisible });
  };

  componentDidMount() {
    document.addEventListener("keyup", this.onKeyUp);
    const barsVisible = this.state.barsVisible;
    //barsVisible[1] = false;
    this.setState({ barsVisible });
  }

  render() {
    console.log(this.props.animal);
    return (
      <div className="card" style={playerCardStyle}>
        <div style={imgStyle}>
          <img
            src={"./images/" + this.props.animal + ".png"}
            alt="Animal"
            style={{ height: "100%" }}
          />
          {this.state.barsVisible.map((visible, index) => {
            return (
              <div
                style={{
                  width: 10,
                  height: 200,
                  position: "absolute",
                  top: 0,
                  opacity: visible ? 1 : 0,
                  left: index * 60
                }}
              >
                <img src={bar} alt="Cage Bars" style={barStyle} />
              </div>
            );
          })}
          <h1>{this.state.name}</h1>
          <h3>{this.state.letters}</h3>

          <button>Get A Hint</button>
          <div>
            <p>hint should go here</p>
          </div>
        </div>
      </div>
    );
  }
}

const imgStyle = {
  height: "175px",
  position: "relative",
  background: "#50D737",
  border: "4px solid #444",
  borderRadius: "15px",
  width: "280px",
  margin: "10px auto 0px"
};
const barStyle = {
  width: "9px",
  height: "175px",
  position: "absolute",
  zIndex: "10"
};
const cardStyle = {
  background: "white",
  width: "175px",
  border: "solid 5px purple",
  borderRadius: "10px",
  textAlign: "center",
  marginLeft: "20px"
};
const playerCardStyle = {
  position: "relative",
  textAlign: "center",
  border: "4px solid #7B5D94",
  margin: "auto",
  marginTop: "25px",
  width: "300px",
  backgroundColor: "#156369",
  borderRadius: "25px",
  height: "400px"
};

export default AnimalCard;
