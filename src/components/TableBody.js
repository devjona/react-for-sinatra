import TableRow from "./TableRow";
import reducer from "../js/reducer";

const TableBody = (props) => {
  const tableRows = props.schedules.map((schedule) => {
    const hoursThisWeek = schedule.shifts
      .map((shift) => {
        console.log({ shift });
        return shift.duration;
      })
      .reduce(reducer);

    console.log({ hoursThisWeek });

    return (
      <TableRow
        key={schedule.name}
        name={schedule.name}
        hoursThisWeek={hoursThisWeek}
      />
    );
  });
  return <tbody>{tableRows}</tbody>;
};

export default TableBody;
