import React, { useState, useContext } from 'react'
import { useDatabasePush } from './database'
import firebase from './firebase'
import { AuthContext } from './auth'

const NewComment = () => {
    const [, save] = useDatabasePush('comments')
    const [comment, setComment] = useState('')
    const auth = useContext(AuthContext)
    if (auth.user === null) {
        return null
    }
    const { displayName } = auth.user
    const [alternativeDisplayName] = auth.user.email.split('@')
    const createComment = () => {
        if (comment !== '') {
            save({
                content: comment,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
                user: {
                    id: auth.user.uid,
                    name: displayName || alternativeDisplayName
                }
            })
            setComment('')
        }
    }
    return (

        <div className="ui form">
            <h3 className="ui dividing header">Comentar</h3>

            <div className='field'>
                <textarea rows='2' value={comment} onChange={evt => setComment(evt.target.value)} />
            </div>
            <button className="ui primary basic button" onClick={createComment}> Comentar</button>
        </div>
    )
}

export default NewComment