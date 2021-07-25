// import logo from './logo.svg';
import "./App.css";

function App() {
  const name = "Manager";
  const url = "http://localhost:4567";

  const myHeaders = new Headers();
  // // console.log({ myHeaders });
  // // myHeaders.append("Content-Type", "application/json");
  // // myHeaders.append("Accept", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");
  // myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Allow", "GET, POST, OPTIONS");
  // // myHeaders.append("Accept", "*");
  const myInit = {
    // method: "GET",
    // method: "POST",
    // headers: myHeaders,
    // mode: "cors",
    mode: "no-cors",
    //   // cache: "default",
  };

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

  const cheatData = [
    {
      name: "Alfred Brown",
      shifts: [
        {
          day: 0,
          start_at: "12pm",
          end_at: "5pm",
          duration: 5,
          role: "Server",
          color: "red",
        },
        {
          day: 1,
          start_at: "9am",
          end_at: "12pm",
          duration: 3,
          role: "Host",
          color: "green",
        },
        {
          day: 3,
          start_at: "9am",
          end_at: "4pm",
          duration: 7,
          role: "Server",
          color: "red",
        },
        {
          day: 5,
          start_at: "9am",
          end_at: "2pm",
          duration: 5,
          role: "Host",
          color: "green",
        },
      ],
    },
    {
      name: "Tim Cannady",
      shifts: [
        {
          day: 0,
          start_at: "11am",
          end_at: "6pm",
          duration: 7,
          role: "Chef",
          color: "orange",
        },
        {
          day: 1,
          start_at: "9am",
          end_at: "3pm",
          duration: 6,
          role: "Dishwasher",
          color: "purple",
        },
        {
          day: 2,
          start_at: "9am",
          end_at: "1pm",
          duration: 4,
          role: "Chef",
          color: "orange",
        },
        {
          day: 5,
          start_at: "9pm",
          end_at: "4am",
          duration: 7,
          role: "Dishwasher",
          color: "purple",
        },
      ],
    },
    {
      name: "Jeff Auston",
      shifts: [
        {
          day: 1,
          start_at: "11am",
          end_at: "6pm",
          duration: 7,
          role: "Chef",
          color: "orange",
        },
        {
          day: 2,
          start_at: "9am",
          end_at: "3pm",
          duration: 6,
          role: "Dishwasher",
          color: "purple",
        },
        {
          day: 4,
          start_at: "9am",
          end_at: "1pm",
          duration: 4,
          role: "Chef",
          color: "orange",
        },
        {
          day: 6,
          start_at: "9am",
          end_at: "4pm",
          duration: 7,
          role: "Dishwasher",
          color: "purple",
        },
      ],
    },
  ];

  const allShifts = [];
  cheatData.forEach((employee) => {
    console.log("employee: ", employee);
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
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const shiftHoursPerDay = allShiftsByDay.map((day) => {
    const shiftHours = [];
    day.forEach((shift) => {
      shiftHours.push(shift.duration);
    });
    return shiftHours.reduce(reducer);
  });

  console.log({ shiftHoursPerDay });

  // console.log(shiftHoursPerDaySummed);

  // const totalHoursPerDay = allShiftsByDay.map(day => {

  // })

  const AllSchedules = cheatData.map((weeklySchedule) => {
    console.log(weeklySchedule);
    return (
      <tr key={weeklySchedule.name}>
        <td>{weeklySchedule.name}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  });

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const TableHeaderRow = shiftHoursPerDay.map((day, index) => {
    return (
      <th>
        {dayNames[index]} ({day} hrs)
      </th>
    );
  });

  return (
    <div className="App">
      <h1>Hey there, {name}!</h1>
      <h2>Schedules:</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            {TableHeaderRow}
            {/* <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th> */}
          </tr>
        </thead>
        <tbody>{AllSchedules}</tbody>
      </table>
    </div>
  );
}

export default App;
