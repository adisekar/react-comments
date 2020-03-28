import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="#" className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">
                    {props.content}
                </div>
                <div className="actions">
                    <a href="#" className="reply">Reply</a>
                </div>
            </div>
        </div>
    );
}

export default CommentDetail;