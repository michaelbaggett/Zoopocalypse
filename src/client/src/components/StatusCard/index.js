import React, { Component } from "react";
import "./index.css";

  class StatusCard extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      completed: this.props.completed

    };
  
    render() {
        return (
            <div>
              { this.state.completed
                ?     <div className="card">
        
                <div className ="animalstatus">
                    <div className="img-container" style={{backgroundColor: "green"}}>
                    <img className="image" alt={this.props.name} src={this.props.image} />
                    </div>
                    <div>
                        Status: Freed
                    </div>
                
                </div>
         
              </div>
                :     <div className="card">
        
                <div className ="animalstatus">
                    <div className="img-container">
                    <img className="image" alt={this.props.name} src={this.props.image} />
                    </div>
                    <div>
                        Status: Caged
                    </div>
                
                </div>
         
              </div>
              }
            </div>
          );
         }
    }
  
  
  export default StatusCard;