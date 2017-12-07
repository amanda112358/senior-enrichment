import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { fetchCampuses } from '../reducers/campuses';
import { fetchStudents } from '../reducers/students';
import store from '../store';
import Navbar from './Navbar';
import Students from './Students';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import Campuses from './Campuses';
import Home from './Home';
import CampusForm from './CampusForm';
import StudentForm from './StudentForm';

export default class Root extends Component {

  componentDidMount() {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/students" component={Students} />
          <Route path="/students/:studentId" component={SingleStudent} />
          <Route exact path="/campuses" component={Campuses} />
          <Route exact path="/campuses/:campusId" component={SingleCampus} />
          <Route path="/new-campus" component={CampusForm} />
          <Route path="/new-student" component={StudentForm} />
          <Route path="/campuses/:campusId/edit-campus" component={CampusForm} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}
