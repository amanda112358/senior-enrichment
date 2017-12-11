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
import NewCampus from './NewCampus';
import EditCampus from './EditCampus';
import NewStudent from './NewStudent';
import EditStudent from './EditStudent';
import Footer from './Footer';

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

          <Route exact path="/campuses" component={Campuses} />
          <Route exact path="/campuses/:campusId" component={SingleCampus} />
          <Route exact path="/new-campus" component={NewCampus} />
          <Route exact path="/campuses/:campusId/edit-campus" component={EditCampus} />

          <Route exact path="/students" component={Students} />
          <Route exact path="/students/:studentId" component={SingleStudent} />
          <Route exact path="/new-student" component={NewStudent} />
          <Route exact path="/students/:studentId/edit-student" component={EditStudent} />

          <Route component={Home} />

        </Switch>
        <Footer />
      </div>
    )
  }
}
