import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { destroyStudent } from '../reducers';

const Students = (props) => {

  const { students, campusId, deleteStudent } = props;
  const renderStudents = campusId ? students.filter(student => student.campusId === campusId) : students;

  return (
    <div>
      <h1>Students</h1>
      <Link to={`/new-student`}>Add New Student</Link>
      <ul>
        {
          renderStudents.map(student => {
            return (
              <div key={student.id}>
                <Link to={`/students/${student.id}`}>Name: {student.name}</Link>
                <button key={student.id} onClick={() => deleteStudent(student.id)}>X</button>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    students: state.students
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteStudent: (studentId) => dispatch(destroyStudent(ownProps.history, studentId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
