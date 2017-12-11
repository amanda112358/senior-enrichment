import React from 'react';
import { connect } from 'react-redux';
import { putStudent } from '../reducers';
import StudentForm from './StudentForm';


const EditStudent = (props) => {
  return (
    <StudentForm
      student={this.props.student}
      label={`Edit Student`}
      postOrPut={putStudent}
      buttonText={'Submit Changes'}
      history={props.history}
    />
  )
}

const mapStateToProps = function (state, ownProps) {
  const studentId = Number(ownProps.match.params.studentId);
  const studentToEdit = state.students.find(student => student.id === studentId)
  return {
    student: studentToEdit
  };
};


export default connect(mapStateToProps)(EditStudent);
