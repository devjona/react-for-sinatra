import dayNames from "../js/dayNames";

const TableHeader = (props) => {
  // some stuff
  console.log({ props });

  const thCells = dayNames.map((day, index) => {
    return (
      <th key={index}>
        {day} ({props.shiftHoursPerDay[index]}hrs)
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