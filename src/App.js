import React from 'react';
import '../node_modules/semantic-ui-css/semantic.min.css';
import './App.css'

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SignInUser from './SignInUser'

import { AuthProvider } from './auth'

function App() {
  return (
    <AuthProvider>
      <div class="ui raised very padded text container segment">
        <div className="ui comments">
          <h3 className="ui dividing header">Comentários</h3>
          <Comments />
          <NewComment />
          <CreateUser />
          <SignInUser />
          <UserInfo />
        </div>
      </div>

    </AuthProvider>
  )
}

export default App
