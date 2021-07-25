const TableHeader = (props) => {
  // some stuff
  console.log({ props });

  const thCells = props.dayNames.map((day, index) => {
    return <th key={index}>{day} ( hrs)</th>;
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
