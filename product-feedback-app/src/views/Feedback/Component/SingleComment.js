import React, {useState} from 'react';
import {
    BtnReplay,
    Comment,
    CommentContent,
    DisplayName,
    NameWrapper,
    ReplayBtn, ReplayForm, ReplyInput,
    User,
    UserImage,
    UserInfo,
    UserName
} from "../FeedbackStyle";
import RepliesList from "./RepliesList";

export default function SingleComment({commentData}) {
    const [replayOpen, setReplayOpen] = useState(false)

    return (
        <>
            <Comment>
                <User>
                    <UserInfo>
                        <UserImage src={commentData.user.image}/>
                        <NameWrapper>
                            <DisplayName>{commentData.user.name}</DisplayName>
                            <UserName>{commentData.user.username}</UserName>
                        </NameWrapper>
                    </UserInfo>
                    <ReplayBtn onClick={() => setReplayOpen(!replayOpen)}>Replay</ReplayBtn>
                </User>
                <CommentContent>
                    {commentData.content}
                </CommentContent>
                {
                    commentData.replies &&
                    <RepliesList replies={commentData.replies}/>
                }
                {replayOpen &&
                <ReplayForm replayOpen={replayOpen}>
                    <ReplyInput/>
                    <BtnReplay>Post Reply</BtnReplay>
                </ReplayForm>
                }


            </Comment>


        </>

    )
}