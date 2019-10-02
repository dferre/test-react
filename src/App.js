import React, { Component, useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = props => {
  const [usersState, setUsers] = useState({
    users: [
      { username: 'Ricky'},
      { username: 'Johan'}
    ]
  });

  const clickButton = (newName) => {
    setUsers({
      users: [
        { username: newName},
        { username: 'Johan Santanna'}
      ]
    });
  }

  const nameChangedHandler = (event) => {
    setUsers({
      users: [
        { username: 'Ricky'},
        { username: event.target.value}
      ]
    });
  }

  return (
    <div className="App">
      <UserInput
        changes={nameChangedHandler}
        username={usersState.users[1].username}
      />

      <button onClick={clickButton.bind(this, 'Tom Holland!!')}>Click Me</button>
      <UserOutput
        username={usersState.users[0].username}
      />
      <UserOutput
        username={usersState.users[1].username}
      />
    </div>
  );
}

export default App;




/*
Create TWO new components: UserInput and UserOutput

UserInput should hold an input element, UserOutput two paragraphs

Output multiple UserOutput components in the App component (any paragraph texts of your choice)

Pass a username (of your choice) to UserOutput via props and display it there
Add state to the App component (=> the username) and pass the username to the UserOutput component

Add a method to manipulate the state (=> an event-handler method)

Pass the event-handler method reference to the UserInput component and bind it to the input-change event

Ensure that the new input entered by the user overwrites the old username passed to UserOutput

Add two-way-binding to your input (in UserInput) to also display the starting username

Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

*/
