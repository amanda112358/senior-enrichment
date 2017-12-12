import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  writeStudentFirstName,
  writeStudentLastName,
  writeStudentEmail,
  writeStudentGPA,
  selectStudentCampus,
  postStudent,
  putStudent } from '../reducers';

class StudentForm extends Component {

  componentDidMount(){
    this.props.setInput();
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      gpa,
      campuses,
      campusId,
      label,
      buttonText,
      handleChange,
      handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="form-horizontal">

        <div className="form-group">
          <label className="control-label">First Name</label>
          <div className="col-sm-10">
            <input
              value={firstName}
              onChange={handleChange}
              type="text"
              name="firstName"
              placeholder="First Name"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label">Last Name</label>
          <div className="col-sm-10">
            <input
              value={lastName}
              onChange={handleChange}
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <div className="col-sm-10">
            <input
              value={email}
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="e-mail"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label">GPA</label>
          <div className="col-sm-10">
            <input
              value={gpa}
              onChange={handleChange}
              type="text"
              name="gpa"
              placeholder="GPA"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label">Campus</label>
          <div className="col-sm-10">
            <select
              name="campus"
              onChange={handleChange}
              value={campusId}>
              {
                campuses.map(campus => {
                  return (
                      <option key={campus.id} value={campus.id}>{campus.name}</option>
                  )
                })
              }
            </select>
          </div>
        </div>

        <button type="submit" className="btn-main">{buttonText}</button>

      </form>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    firstName: state.studentEntry.firstName,
    lastName: state.studentEntry.lastName,
    email: state.studentEntry.email,
    gpa: state.studentEntry.gpa,
    campusId: state.studentEntry.campusId,
    campuses: state.campuses
  }
};

const mapDispatchToProps = function (dispatch, ownProps) {

  const { student, history } = ownProps;

  return {
    setInput() {
      if (student) { // edit exisiting student
        dispatch(writeStudentFirstName(student.firstName));
        dispatch(writeStudentLastName(student.lastName));
        dispatch(writeStudentEmail(student.email));
        dispatch(writeStudentGPA(student.gpa));
      } else { // create new student
        dispatch(writeStudentFirstName(''));
        dispatch(writeStudentLastName(''));
        dispatch(writeStudentEmail(''));
        dispatch(writeStudentGPA(''));
      }
    },
    handleChange (event) {
      const field = event.target.name;
      const input = event.target.value;
      if (field === 'firstName') dispatch(writeStudentFirstName(input));
      if (field === 'lastName') dispatch(writeStudentLastName(input));
      if (field === 'email') dispatch(writeStudentEmail(input));
      if (field === 'gpa') dispatch(writeStudentGPA(input));
      if (field === 'campus') dispatch(selectStudentCampus(input));
    },
    handleSubmit (event) {
      event.preventDefault();

      const firstName = event.target.firstName.value;
      const lastName = event.target.lastName.value;
      const email = event.target.email.value;
      const gpa = +event.target.gpa.value;
      const campusId = event.target.campus.value;

      if (student) {
        const editStudent = putStudent(history, { firstName, lastName, email, gpa, campusId }, student.id)
        dispatch(editStudent);
      } else {
        const createStudent = postStudent(history, { firstName, lastName, email, gpa, campusId })
        dispatch(createStudent);
      }
      // dispatch(writeStudentFirstName(''));
      // dispatch(writeStudentLastName(''));
      // dispatch(writeStudentEmail(''));
      // dispatch(writeStudentGPA(''));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
