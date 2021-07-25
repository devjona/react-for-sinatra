// import logo from './logo.svg';
import "./App.css";
import SingleShift from "./components/SingleShift";
import { cheatData } from "./test-data/cheatData";

function App() {
  const name = "Manager";
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

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // We'll use this to sum up hours per week/employee or hours/day-all shifts.
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

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

  let allShiftsByDay = [];
  for (let i = 0; i <= 6; i++) {
    let currentDayHours = allShiftsConcatSorted.filter((shift) => {
      return shift.day === i;
    });
    allShiftsByDay.push(currentDayHours);
  }
  console.log({ allShiftsByDay });

  // A day has many shifts; each shift has a duration. We'll look at the duration of all shifts in a day, sum them, and return a new array that has the total of how many people-hours are being scheduled per day.
  const shiftHoursPerDay = allShiftsByDay.map((day) => {
    const shiftHours = [];
    day.forEach((shift) => {
      shiftHours.push(shift.duration);
    });
    return shiftHours.reduce(reducer);
  });

  console.log({ shiftHoursPerDay });

  const TableBodyRows = cheatData.map((weeklySchedule, index) => {
    // Need total hours per week for each employee.

    const TableDataShifts = dayNames.map((day, index) => {
      return (
        <SingleShift
          key={index}
          name={dayNames[index]}
          dayOfWeekIndex={index}
          shifts={weeklySchedule.shifts}
        />
      );
    });

    console.log({ weeklySchedule });
    return (
      <tr key={weeklySchedule.name}>
        <td>{weeklySchedule.name}</td>
        {TableDataShifts}
      </tr>
    );
  });

  const TableHeaderRow = shiftHoursPerDay.map((day, index) => {
    return (
      <th key={index}>
        {dayNames[index]} ({day} hrs)
      </th>
    );
  });

  return (
    <div className="App">
      <h1>Hey there, {name}!</h1>
      <div className="schedule-container">
        <h2>Schedules:</h2>
        <div className="input-group">
          <label htmlFor="sort-by">Sort by</label>
          <select name="sort-by" id="select-sort-type">
            <option value="first_name">First Name</option>
            <option value="last_name">Last Name</option>
          </select>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th></th>
                {TableHeaderRow}
              </tr>
            </thead>
            <tbody>{TableBodyRows}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
