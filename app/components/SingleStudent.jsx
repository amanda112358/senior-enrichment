import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function SingleStudent (props) {

    const studentId = Number(props.match.params.studentId);
    const selectedStudent = props.students.find(student => student.id === studentId);
    console.log(selectedStudent);
    return (
      <div>
        <ul>
          <li>Name: {selectedStudent.name}</li>
          <li>Campus: <Link to={`/campuses/${selectedStudent.campus.id}`}>{selectedStudent.campus.name}</Link></li>
          <li>GPA: {selectedStudent.gpa}</li>
        </ul>
      </div>
    )
  }

  const mapStateToProps = function (state) {

    return {
      students: state.students
    };
  }

  export default connect(mapStateToProps)(SingleStudent);
