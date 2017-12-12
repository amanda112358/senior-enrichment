import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { destroyStudent } from '../reducers';

const Students = (props) => {

  const { students, campus, confirmDelete } = props;
  const renderStudents = campus ? students.filter(student => student.campusId === campus.id) : students;

  return (
    <div className="students-container">
      <h3>Students</h3>
      <table className="table">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>GPA</th>
            <th>Remove Student</th>
          </tr>
          {
            renderStudents.map(student => {
              return (
                <tr key={student.id}>
                  <td><Link to={`/students/${student.id}`}>{student.id}</Link></td>
                  <td><Link to={`/students/${student.id}`}>{student.name}</Link></td>
                  <td>{student.email}</td>
                  <td>{student.gpa}</td>
                  <td>
                    <button
                      key={student.id}
                      className="btn-remove-student"
                      onClick={() => confirmDelete(student, campus)}>x
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
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
    confirmDelete: (student, campus) => {
      const confirmDelete = `Are you sure you want to remove all records of ${student.name} from ${campus.name}?`;
      if (confirm(confirmDelete)) dispatch(destroyStudent(ownProps.history, student))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);
