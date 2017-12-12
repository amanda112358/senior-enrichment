import React from 'react';
import { postStudent } from '../reducers';
import StudentForm from './StudentForm';


const NewStudent = (props) => {
  return (
    <StudentForm
      label={'New Student Information:'}
      postOrPut={postStudent}
      buttonText={'Submit New Student'}
      history={props.history}
      campusId={props.match.params.campusId}
    />
  )
}

export default NewStudent;
