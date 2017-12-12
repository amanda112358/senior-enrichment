import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


function SingleStudent (props) {

    const { student, history } = props;
    const navigateToEditStudent = () => history.push(`/students/${student.id}/edit-student`);

    return student
    ? (
      <div className="student-bio">
        <div>
          <h3>{student.name}</h3>
          <h6><Link to={`/campuses/${student.campus.id}`}>{student.campus.name}</Link></h6>
          <h6>{student.email}</h6>
          <h6>GPA: {student.gpa}</h6>
        </div>
        <div className="button-container">
          <button className="btn-main" onClick={navigateToEditStudent}>Edit</button>
        </div>
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

  export default withRouter(connect(mapStateToProps)(SingleStudent));
