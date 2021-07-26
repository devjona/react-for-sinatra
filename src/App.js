// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import { cheatData } from "./test-data/cheatData";
import reducer from "./js/reducer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort_by: "first_name",
      data: null,
      userName: "Manager",
    };

    // bind to this:
    this.fetchScheduleData = this.fetchScheduleData.bind(this);
    this.sortbyFirstName = this.sortbyFirstName.bind(this);
    this.sortbyLastName = this.sortbyLastName.bind(this);

    console.log("this in constructor: ", this);
    console.log({ cheatData });
  }

  // const url = "http://localhost:4567";

  // const myHeaders = new Headers();
  // // console.log({ myHeaders });
  // // myHeaders.append("Content-Type", "application/json");
  // // myHeaders.append("Accept", "application/json");
  // myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");
  // myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Allow", "GET, POST, OPTIONS");
  // // myHeaders.append("Accept", "*");
  // const myInit = {
  // method: "GET",
  // headers: myHeaders,
  // mode: "cors",
  // mode: "no-cors",
  //   // cache: "default",
  // };

  // console.log({ myInit });
  // let shiftsJSON;

  // fetch(`${url}/shifts`, myInit)
  //   .then((response) => {
  //     console.log("response: ", response);
  //     return response.json();
  //   })
  //   .then((data) => console.log("SHIFT data: ", data));
  //   .catch((error) => console.log("error is: ", error));

  // BACON!!!
  // fetch("https://baconipsum.com/api/?type=meat-and-filler&format=json")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  // CAT api
  // fetch("https://catfact.ninja/fact")
  //   .then((response) => {
  //     console.log("response: ", response);
  //     return response.json();
  //   })
  //   .then((data) => console.log("CAT data: ", data));
  sortbyFirstName() {}

  sortbyLastName() {}

  fetchScheduleData() {
    console.log("going to fetch Data");
    this.setState({ data: cheatData });
  }

  componentDidMount() {
    console.log("componentDidMOUNT!");
    this.fetchScheduleData();
  }

  render() {
    if (this.state.data) {
      return (
        <div className="App">
          <h1>Hey there, {this.state.userName}!</h1>
          <div className="schedule-container">
            <h2>Schedules:</h2>
            <div className="input-group">
              <label htmlFor="sort-by">Sort by</label>
              <select name="sort-by" id="select-sort-type">
                <option value="first_name">First Name</option>
                <option value="last_name">Last Name</option>
              </select>
            </div>

            <table>
              <TableHeader schedules={this.state.data} />
              <TableBody schedules={this.state.data} />
            </table>
          </div>
        </div>
      );
    } else {
      return <p>Loading schedule data...</p>;
    }
  }
}

export default App;
