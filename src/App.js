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
      data: cheatData,
      userName: "Manager",
      shiftHoursPerDay: [],
    };

    // bind to this:
    this.prepDataForSchedule = this.prepDataForSchedule.bind(this);

    console.log("this in constructor: ", this);
    console.log({ cheatData });
  }

  // const name = "Manager";
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

  prepDataForSchedule() {
    let allShiftsByDay = [];

    const allShifts = [];
    cheatData.forEach((employee) => {
      allShifts.push(employee.shifts);
    });

    const allShiftsConcatSorted = Array.prototype
      .concat(...allShifts)
      .sort((a, b) => {
        return a.day - b.day;
      });

    console.log({ allShifts });
    console.log({ allShiftsConcatSorted });

    for (let i = 0; i <= 6; i++) {
      let currentDayHours = allShiftsConcatSorted.filter((shift) => {
        return shift.day === i;
      });
      allShiftsByDay.push(currentDayHours);
    }
    console.log({ allShiftsByDay });

    // A day has many shifts; each shift has a duration. We'll look at the duration of all shifts in a day, sum them, and return a new array that has the total of how many people-hours are being scheduled per day.
    // const shiftHoursPerDay = allShiftsByDay.map((day) => {
    this.setState({
      shiftHoursPerDay: allShiftsByDay.map((day) => {
        const shiftHours = [];
        day.forEach((shift) => {
          shiftHours.push(shift.duration);
        });
        return shiftHours.reduce(reducer);
      }),
    });

    // console.log({ this.state.shiftHoursPerDay });

    // const TableBodyRows = cheatData.map((weeklySchedule, index) => {
    //   console.log({ weeklySchedule });
    //   // Need total hours per week for each employee.
    //   const employeeHoursThisWeek = weeklySchedule.shifts
    //     .map((shift) => {
    //       return shift.duration;
    //     })
    //     .reduce(this.reducer);
    //   console.log({ employeeHoursThisWeek });

    // const TableDataShifts = this.dayNames.map((day, index) => {
    //   return (
    //     <SingleShift
    //       key={index}
    //       name={this.dayNames[index]}
    //       dayOfWeekIndex={index}
    //       shifts={weeklySchedule.shifts}
    //     />
    //   );
    // });

    // return (
    //   <tr key={weeklySchedule.name}>
    //     <td>
    //       {weeklySchedule.name} ({employeeHoursThisWeek} hrs)
    //     </td>
    //     {TableDataShifts}
    //   </tr>
    // );
    // });

    // console.log(TableBodyRows);

    // const TableHeaderRow = shiftHoursPerDay.map((day, index) => {
    //   return (
    //     <th key={index}>
    //       {this.dayNames[index]} ({day} hrs)
    //     </th>
    //   );
    // });
  }

  componentDidMount() {
    console.log("componentDidMOUNT!");
    this.prepDataForSchedule();
    console.log("data: ", this.state.data);
  }

  render() {
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
            <TableHeader shiftHoursPerDay={this.state.shiftHoursPerDay} />
            <TableBody schedules={this.state.data} />
          </table>
        </div>
      </div>
    );
  }
}

export default App;
