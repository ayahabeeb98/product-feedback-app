import React from 'react';
import {Comments, CommentsTitle} from "../FeedbackStyle";
import SingleComment from "./SingleComment";

export default function CommentsList({comments}) {
    const mappedComments = comments.map(comment => {
        return <SingleComment key={comment.id} commentData={comment}/>
    })

    return (
        <Comments>
            <CommentsTitle>
                {comments.length} Comments
            </CommentsTitle>

            {mappedComments}

        </Comments>
    )
}