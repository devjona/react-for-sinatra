import SingleShift from "./SingleShift";
import dayNames from "../js/dayNames";

const TableRow = (props) => {
  const TableDataShifts = dayNames.map((day, index) => {
    return (
      <SingleShift
        key={index}
        name={dayNames[index]}
        dayOfWeekIndex={index}
        shifts={props.schedule.shifts}
      />
    );
  });
  return (
    <tr>
      <td>
        {props.schedule.name} ({props.hoursThisWeek} hrs)
      </td>
      {TableDataShifts}
    </tr>
  );
};

export default TableRow;
