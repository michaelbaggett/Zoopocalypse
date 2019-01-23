import React, { Component } from "react";
import bar from "../../images/cageBars.png";

export class AnimalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barsVisible: props.animal.split("").map(e => true),
      name: props.animal.split("").map(e => "_ "),
      letters: [],
      targetPosition: 0,
      message: "",
      hint: "",
      isComplete: false,
    };
  }

  handleHintButton = event => {
    event.preventDefault();
    this.setState({
      hint: "please dont ask",
    });
  }
  handleResetButton = event => {
    event.preventDefault();
    this.setState({
      barsVisible: this.props.animal.split("").map(e => true),
      name: this.props.animal.split("").map(e => "_ "),
      letters: [],
      targetPosition: 0,
      message: "",
      hint: "",
      isComplete: false,
    })
  }

  onKeyUp = event => {
    const word = this.props.animal; // word to guess
    const name = [...this.state.name];
    const letters = [...this.state.letters]; // total letters guessed
    // const guessLog = [...this.state.guessLog];  incorrect guesses
    const barsVisible = [...this.state.barsVisible];
    //event.key.touppercase is making the letter pressed uppercase and pusing to the letters array in the state
    const key = event.key.toLowerCase();

      if (key === word[this.state.targetPosition]) {
        barsVisible[this.state.targetPosition] = false;

        name[this.state.targetPosition] = key;

        if(this.state.targetPosition === word.length -1){
          this.setState({
            message: "Word Complete!",
            isComplete: true,
          });
        }

        this.setState({
         targetPosition: this.state.targetPosition + 1,
         barsVisible,
         name
        });
      } else {
        // adds incorrect letters to the letters arr and updates the h tag
        letters.push(key);
        this.setState({ letters, barsVisible });
      }
  
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
                  left: (index + 0.5) * 260/(this.state.barsVisible.length || 0.00001),
                }}
              >
                <img src={bar} alt="Cage Bars" style={barStyle} />
              </div>
            );
          })}
          <h1>{this.state.name}</h1>
          <h3>{this.state.letters}</h3>

          <button onClick={this.handleHintButton}>Get A Hint</button>
          <button onClick={this.handleResetButton}>Reset</button>
          
          <h1>{this.state.hint}</h1>
          <div>
            <p>{this.state.message}</p>
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
