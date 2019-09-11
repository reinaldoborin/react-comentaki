import React, { useContext } from 'react'
import Time from './Time'
import { AuthContext } from './auth'

const Comment = ({ comment }) => {
    return (
        <div>
            {comment.content} por: {comment.user.name} em: <Time timestamp={comment.createdAt} />
        </div>
    )
}

export default Comment