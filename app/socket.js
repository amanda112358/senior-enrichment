import io from 'socket.io-client';
import store, { getStudent } from './store';

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('I am now connected to the server!');

  socket.on('new-student', student => {
    store.dispatch(getStudent(student));
  });

});

export default socket;
