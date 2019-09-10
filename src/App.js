import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from './firebase'

/* firebase
  .auth()
  .createUserWithEmailAndPassword('msndoikky@hotmail.com', 'abc123')
  .then(user => {
    user.displayName = 'Reinaldo Borin'
    firebase.auth().updateCurrentUser(user)
  }) */

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    user.updateProfile({ displayName: 'Reinaldo Borin' })
  }
})

const useDatabase = endpoint => {
  const [data, setData] = useState({})
  useEffect(() => {
    const ref = firebase.database().ref(endpoint)
    ref.on('value', snapshot => {
      setData(snapshot.val())
    })
    return () => {
      ref.off()
    }
  }, [endpoint])
  return data
}

const useDatabasePush = endpoint => {
  const [status, setStatus] = useState('')
  const save = data => {
    const ref = firebase.database().ref(endpoint)
    ref.push(data, err => {
      if (err) {
        setStatus('ERROR')
      } else {
        setStatus('SUCCESS')
      }
    })
  }
  return [status, save]
}

const Time = ({ timestamp }) => {
  const date = new Date(timestamp)
  const hours = date.getHours()
  const minutes = '0' + date.getMinutes()
  const seconds = '0' + date.getSeconds()
  const day = '0' + (date.getDay() + 8)
  const month = '0' + (date.getMonth() + 1)
  const year = date.getFullYear()
  return `${day.substr(-2)}/${month.substr(-2)}/${year} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`
}
const Comment = ({ comment }) => {
  return (
    <div>
      {comment.content} por: {comment.user.name} em: <Time timestamp={comment.createdAt} />
    </div>
  )
}

const Comments = () => {
  const data = useDatabase('comments')
  if (!data) {
    return <p>Nenhum comentário encontrado.</p>
  }
  const ids = Object.keys(data)
  if (ids.length === 0) {
    return <p>Carregando...</p>
  }
  return ids.map(id => {
    return <Comment key={id} comment={data[id]} />
  })
}

const NewComment = props => {
  const [, save] = useDatabasePush('comments')
  const [comment, setComment] = useState('')
  const createComment = () => {
    if (comment !== '') {
      save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          id: '1',
          name: 'Reinaldo'
        }
      })
      setComment('')
    }
  }
  return (
    <div>
      <textarea value={comment} onChange={evt => setComment(evt.target.value)} />
      <button onClick={createComment}> Comentar</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <NewComment />
      <Comments />
    </div>
  )
}

export default App;
