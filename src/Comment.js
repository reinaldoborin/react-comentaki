import React from 'react'
import Time from './Time'


const Comment = ({ comment }) => {
    return (
        <div>
            <div className="comment">
                <div className="avatar">
                    <img alt="avatar" src="https://semantic-ui.com/images/avatar/large/justen.jpg" />
                </div>
                <div className="content">
                    <div className="author">{comment.user.name}</div>
                    <div className="metadata">
                        <span className="date"><Time timestamp={comment.createdAt} /></span>
                    </div>
                    <div className="text">
                        {comment.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment