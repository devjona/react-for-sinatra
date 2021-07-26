import dayNames from "../js/dayNames";
import reducer from "../js/reducer";

const TableHeader = (props) => {
  // re-work data to provide how many hours are scheduled per day among all employees:
  let allShiftsByDay = [];

  let allShifts = [];
  props.schedules.forEach((schedule) => {
    allShifts.push(schedule.shifts);
  });

  const allShiftsConcatSorted = Array.prototype
    .concat(...allShifts)
    .sort((a, b) => {
      return a.day - b.day;
    });

  for (let i = 0; i <= 6; i++) {
    let currentDayHours = allShiftsConcatSorted.filter((shift) => {
      return shift.day === i;
    });
    allShiftsByDay.push(currentDayHours);
  }

  const shiftHoursPerDay = allShiftsByDay.map((day) => {
    const shiftHours = [];
    day.forEach((shift) => {
      shiftHours.push(shift.duration);
    });
    return shiftHours.reduce(reducer);
  });

  const thCells = dayNames.map((day, index) => {
    return (
      <th key={index}>
        {day} ({shiftHoursPerDay[index]}hrs)
      </th>
    );
  });

  return (
    <thead>
      <tr>
        <th></th>
        {thCells}
      </tr>
    </thead>
  );
};

export default TableHeader;
