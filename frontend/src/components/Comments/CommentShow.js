// show an individual comment

import React from 'react';

import { Button } from 'reactstrap';

const CommentShow = ({ comment, deleteComment }) => {
    return (
        <div>
        <h3>{comment.author}</h3>
        <p>{comment.body}</p>
        <Button
            onClick={() => {
            deleteComment(comment.id);
            }}
        >
            Delete
        </Button>
        </div>
    );
}

export default CommentShow;