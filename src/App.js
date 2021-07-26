// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";
import { cheatData } from "./test-data/cheatData";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      userName: "Manager",
    };

    // bind to this:
    this.fetchScheduleData = this.fetchScheduleData.bind(this);
    this.sortByFirstOrLastName = this.sortByFirstOrLastName.bind(this);
    this.onSelectHandler = this.onSelectHandler.bind(this);
  }

  // TODO: Having nasty CORS issues, can't get response from Sinatra despite all my attempts.
  // testFetch() {
  //   console.log("hi");
  //   const url = "http://localhost:4567";
  //   // const myHeaders = new Headers();
  //   // // console.log({ myHeaders });
  //   // // myHeaders.append("Content-Type", "application/json");
  //   // // myHeaders.append("Accept", "application/json");
  //   // myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");
  //   // myHeaders.append("Content-Type", "application/json");
  //   // myHeaders.append("Allow", "GET, POST, OPTIONS");
  //   // // myHeaders.append("Accept", "*");
  //   const myInit = {
  //     method: "GET",
  //     // headers: myHeaders,
  //     // mode: "cors",
  //     // mode: "no-cors",
  //     // cache: "default",
  //   };
  //   // console.log({ myInit });
  //   // let shiftsJSON;
  //   // fetch(`${url}/shifts`)
  //   fetch(`${url}/shifts`, myInit)
  //     .then((response) => {
  //       console.log("response: ", response);
  //       return response.json();
  //     })
  //     .then((data) => console.log("SHIFT data: ", data))
  //     .catch((error) => console.log("error is: ", error));

  //   // CAT api
  //   fetch("https://catfact.ninja/fact")
  //     .then((response) => {
  //       console.log("response: ", response);
  //       return response.json();
  //     })
  //     .then((data) => console.log("CAT data: ", data));
  // }

  onSelectHandler(e) {
    let sortedSchedule;
    if (e.target.value === "first_name") {
      sortedSchedule = this.sortByFirstOrLastName(0, this.state.data);
    }
    if (e.target.value === "last_name") {
      sortedSchedule = this.sortByFirstOrLastName(1, this.state.data);
    }

    this.setState({ data: sortedSchedule });
  }

  sortByFirstOrLastName(int, data) {
    const schedulesSortedByName = data.slice();
    schedulesSortedByName.sort((a, b) => {
      let nameA = a.name.split(" ")[int].toUpperCase();
      let nameB = b.name.split(" ")[int].toUpperCase();

      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
    return schedulesSortedByName;
  }

  fetchScheduleData() {
    let sortedSchedule = this.sortByFirstOrLastName(0, cheatData);
    this.setState({ data: sortedSchedule });
  }

  componentDidMount() {
    this.fetchScheduleData();
    // this.testFetch();
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
              <select
                name="sort-by"
                id="select-sort-type"
                onChange={this.onSelectHandler}
              >
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
