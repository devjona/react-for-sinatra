import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import TableHeader from "./components/TableHeader";
import TableBody from "./components/TableBody";

const App = () => {
  const [scheduleData, setScheduleData] = useState(null);
  const userName = "Manager";

  useEffect(() => {
    async function fetchScheduleData() {
      const data = await fetch(
        "http://localhost:4567/shifts?sort_by=first_name"
      );
      const dataJson = await data.json();
      setScheduleData(dataJson);
    }
    fetchScheduleData();
  }, []);

  const handleOnChange = useCallback(
    (e) => {
      let sortedSchedule;
      if (e.target.value === "first_name") {
        sortedSchedule = sortByFirstOrLastName(0, scheduleData);
      }
      if (e.target.value === "last_name") {
        sortedSchedule = sortByFirstOrLastName(1, scheduleData);
      }

      setScheduleData(sortedSchedule);
    },
    [scheduleData]
  );

  const sortByFirstOrLastName = (int, data) => {
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
  };

  if (scheduleData) {
    return (
      <div className="App">
        <h1>Hey there, {userName}!</h1>
        <div className="schedule-container">
          <h2>Schedules:</h2>
          <div className="input-group">
            <label htmlFor="sort-by">Sort by</label>
            <select
              name="sort-by"
              id="select-sort-type"
              onChange={handleOnChange}
            >
              <option value="first_name">First Name</option>
              <option value="last_name">Last Name</option>
            </select>
          </div>

          <table>
            <TableHeader schedules={scheduleData} />
            <TableBody schedules={scheduleData} />
          </table>
        </div>
      </div>
    );
  } else {
    return <p>Loading schedule data...</p>;
  }
};

export default App;
