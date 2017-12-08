import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function SingleStudent (props) {

    const { student } = props;

    return student
    ? (
      <div>
        <ul>
          <li>Name: {student.name}</li>
          <li>Campus: <Link to={`/campuses/${student.campus.id}`}>{student.campus.name}</Link></li>
          <li>GPA: {student.gpa}</li>
        </ul>
      </div>
    )
    : <h1>Loading...</h1>
  }

  const mapStateToProps = function (state, ownProps) {
    const studentId = Number(ownProps.match.params.studentId);
    return {
      student: state.students.find(student => student.id === studentId)
    };
  }

  export default connect(mapStateToProps)(SingleStudent);
