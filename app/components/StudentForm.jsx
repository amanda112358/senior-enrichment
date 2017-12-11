import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writestudentName, writestudentDescription } from '../reducers';

class StudentForm extends Component {

  componentDidMount(){
    this.props.setInput(this.props.student);
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      gpa,
      label,
      handleChange,
      handleSubmit,
      buttonText } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>{label}</label>
            <input
              value={firstName}
              onChange={handleChange}
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <input
              value={lastName}
              onChange={handleChange}
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
            <input
              value={email}
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="e-mail"
            />
            <input
              value={gpa}
              onChange={handleChange}
              type="text"
              name="gpa"
              placeholder="GPA"
            />

          </div>
          <div>
            <button type="submit">{buttonText}</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    student: ownProps.student,
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    gpa: state.gpa,
    label: ownProps.label,
    buttonText: ownProps.buttonText
  }
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    setInput() {
      if (ownProps.student) { // edit exisiting student
        dispatch(writestudentName(ownProps.student.name));
        dispatch(writestudentDescription(ownProps.student.description));
      } else { // create new student
        dispatch(writestudentName(''));
        dispatch(writestudentDescription(''));
      }
    },
    handleChange (event) {
      const input = event.target.value;
      const field = event.target.name;
      if (field === 'studentName') dispatch(writestudentName(input));
      if (field === 'studentDescription') dispatch(writestudentDescription(input));
    },
    handleSubmit (event) {
      event.preventDefault();
      const name = event.target.studentName.value;
      const description = event.target.studentDescription.value;
      const studentId = ownProps.student ? ownProps.student.id : null;
      dispatch(ownProps.postOrPut({ name, description }, studentId));
      dispatch(writestudentName(''));
      dispatch(writestudentDescription(''));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
