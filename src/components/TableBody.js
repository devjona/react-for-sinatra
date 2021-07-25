import TableRow from "./TableRow";
import reducer from "../js/reducer";

const TableBody = (props) => {
  const tableRows = props.schedules.map((schedule) => {
    const hoursThisWeek = schedule.shifts
      .map((shift) => {
        return shift.duration;
      })
      .reduce(reducer);

    return (
      <TableRow
        key={schedule.name}
        hoursThisWeek={hoursThisWeek}
        schedule={schedule}
      />
    );
  });
  return <tbody>{tableRows}</tbody>;
};

export default TableBody;
