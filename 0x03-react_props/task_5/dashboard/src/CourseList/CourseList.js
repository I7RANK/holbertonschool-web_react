import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

function CourseList(props) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />

        <CourseListRow
          textFirstCell="Course name" textSecondCell="Credit"
          isHeader={true} />
      </thead>

      <tbody>
        {
          listCourses === []? (
            <CourseListRow
              textFirstCell="No course available yet"
              isHeader={false}
            />
          ): listCourses.map((course) => { return (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
            />
          )})
        }
      </tbody>
    </table>
  );
}

CourseList.defaultProps = {
  listCourses: []
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
