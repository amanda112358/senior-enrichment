import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Students = (props) => {
  console.log(props)
  return (
    <div>
      <ul>
        {props.students.map(student =>
        (<div key={student.id}>
          <Link to={`/students/${student.id}`} >Name: {student.name}</Link>
        </div>)
        )}
      </ul>
      <Link to={`/new-student`}>Add New Student</Link>
    </div>
  )
}

const mapStateToProps = function (state, ownProps) {
  if (ownProps.students) return {students: ownProps.students};
  else return {students: state.students};
}

export default connect(mapStateToProps)(Students);
