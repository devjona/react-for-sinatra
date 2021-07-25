const SingleShift = ({ name, dayOfWeekIndex, shifts }) => {
  const todaysShift = shifts.find((shift) => {
    return dayOfWeekIndex === shift.day;
  });

  if (todaysShift) {
    let shiftBlockClassName = `shift-role-color-${todaysShift.color} shift-block`;
    return (
      <td className={shiftBlockClassName}>
        <p>
          {todaysShift.start_at} - {todaysShift.end_at}
        </p>
        <p>{todaysShift.role}</p>
      </td>
    );
  } else {
    return <td></td>;
  }
};

export default SingleShift;
