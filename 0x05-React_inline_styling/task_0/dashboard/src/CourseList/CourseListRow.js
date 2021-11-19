import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow(props) {
  const isHeader = props.isHeader;
  const textFirstCell = props.textFirstCell;
  const textSecondCell = props.textSecondCell;
  let rows;

  const tableHeaderStyles = { background: "#deb5b545" };
  const tableRowsStyles = { background: "#f5f5f5ab" };

  if (isHeader) {
    if (textSecondCell == null) {
      rows = <th style={tableHeaderStyles} colSpan="2">
        {textFirstCell}
      </th>
    } else {
      rows = (
        <>
          <th style={tableHeaderStyles}>{textFirstCell}</th>
          <th style={tableHeaderStyles}>{textSecondCell}</th>
        </>
      )
    }
  } else {
    rows = (
      <>
        <td style={tableRowsStyles}>{textFirstCell}</td>
        <td style={tableRowsStyles}>{textSecondCell}</td>
      </>
    )
  }

  return (
    <tr>{rows}</tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}

export default CourseListRow;
