import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from './firebase'

import NewComment from './NewComment'
import Comments from './Comments'

/* firebase
  .auth()
  .createUserWithEmailAndPassword('msndoikky@hotmail.com', 'abc123')
  .then(user => {
    user.displayName = 'Reinaldo Borin'
    firebase.auth().updateCurrentUser(user)
  }) 

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    user.updateProfile({ displayName: 'Reinaldo Borin' })
  }
})
*/

function App() {
  return (
    <div>
      <NewComment />
      <Comments />
    </div>
  )
}

export default App;
