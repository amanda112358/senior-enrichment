import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { destroyStudent } from '../reducers';
import store from '../store'

class Students extends Component {
  constructor() {
    super();
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent(studentId) {
    console.log(studentId);
    store.dispatch(destroyStudent(studentId));
  }

  render() {

    const { students } = this.props;

    return (
      <div>
        <h1>Students</h1>
        <Link to={`/new-student`}>Add New Student</Link>
        <ul>
          {students.map(student =>
          (<div key={student.id}>
            <Link to={`/students/${student.id}`} >Name: {student.name}</Link>
            <button key={student.id} onClick={() => this.deleteStudent(student.id)}>X</button>
          </div>)
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  if (ownProps.students) return {students: ownProps.students};
  else return {students: state.students};
}

export default connect(mapStateToProps)(Students);
