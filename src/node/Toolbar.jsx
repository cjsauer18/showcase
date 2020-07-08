import React, { Component } from "react";
import "./Toolbar.css";
import bubbleSort from "../algorithms/bubbleSort.js";
import SortingVisualizer from "./SortingVisualizer.jsx";
import quickSort from "../algorithms/quickSort.js";
import mergeSort from "../algorithms/mergeSort.js";
class Toolbar extends Component {
  state = {};
  bubbleSort() {
    const sortedArraysInOrder = bubbleSort(Array.state.array.slice());
    console.log(sortedArraysInOrder);
    this.animateSort(sortedArraysInOrder);
  }
  mergeSort() {
    const sortedArraysInOrder = mergeSort(this.state.array.slice());
    console.log(sortedArraysInOrder);
    this.animateSort(sortedArraysInOrder);
  }
  quickSort() {
    const sortedArraysInOrder = quickSort(this.state.array.slice());
    console.log(sortedArraysInOrder);
    this.animateSort(sortedArraysInOrder);
  }
  render() {
    return (
      <div className="top-bar">
        <li className="array-size-selection">
          <input
            id="changeSize"
            type="range"
            min="10"
            max="150"
            style={null}
            disabled={null}
            onChange={this.handleChange}
          />
        </li>
        <ul className="algorithm-buttons">
          <li>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
          </li>
          <li>
            <button onClick={() => this.setState({ code: 2 })}>
              Merge Sort
            </button>
          </li>
          <li>
            <button onClick={() => this.setState({ code: 3 })}>
              Quick Sort
            </button>
          </li>
          <li>
            <button onClick={() => this.setState({ code: 4 })}>
              Radix Sort
            </button>
          </li>
        </ul>
        <button className="sort-button" onClick={() => this.handleSort()}>
          Begin Sort
        </button>
      </div>
    );
  }
}

export default Toolbar;
