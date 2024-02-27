import React, { Component } from "react";
export default class Quiz extends Component {

  render() {
    return (
      <div className="container">
        <div className="contents">
            <h1>Question</h1>
            <p className="numbers">1 of 15</p>
            <h4 className="questions">Which is the only animal that can't jump?</h4>
            <div className="options">
                <button className="opt">Dog</button>
                <button className="opt">Elephant</button>
            </div>
            <div className="options">
                <button className="opt">Goat</button>
                <button className="opt">Lion</button>
            </div>
            <div className="button">
                <button className="previous">Previous</button>
                <button className="next">Next</button>
                <button className="quit">Quit</button>
            </div>
        </div>
      </div>
    );
  }
}