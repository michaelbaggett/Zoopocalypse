import React, { Component } from "react";
import bar from "../../images/cageBars.png";

export class AnimalCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      barsVisible: props.animal.split("").map(e => true),
      name: props.animal.split(""),
    }
   
   
 }
 renderBars = () => {

  // const barArr = [];
  // const containerWidth  = (280 / (this.props.animal.length + 1)) - 4.5;
  //  for (var i = 0; i < ) {
  //    // bar 1 conatinerWidth
  //    // bar 1 containerWidth  * 2 etc
  //    <img src={bar} style={{...barStyle, right: containerWidth + "px"}} />
  //  }
  // return barArr;
 }
 componentDidMount(){
  const barsVisible = this.state.barsVisible;
  //barsVisible[1] = false;
  this.setState({barsVisible});
 }
  
  render() {
    console.log(this.props.animal)
    return (
      <div className="card" style={playerCardStyle }>
        <div style={imgStyle}>
          <img src={"./images/" +this.props.animal + ".png"} alt="Animal" style={{ height: "100%"}} />
          {
            this.state.barsVisible.map((visible, index) => {
              return (
                    <div style={{ width:10, height:200, position: "absolute", top:0, opacity: (visible ? 1 : 0), left: index * 60}}>
                      <img src={bar} alt="Cage Bars" style={barStyle}></img>
                    </div>
                  )
              })
          }
          <h1>{this.state.name}</h1> 
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
}
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
}

export default AnimalCard;
