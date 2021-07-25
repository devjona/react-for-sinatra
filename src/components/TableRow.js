const TableRow = (props) => {
  return (
    <tr>
      <td>
        {props.name} ({props.hoursThisWeek})
      </td>
    </tr>
  );
};

export default TableRow;
