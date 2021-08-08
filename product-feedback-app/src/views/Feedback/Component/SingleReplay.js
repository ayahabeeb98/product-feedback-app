import React from "react";
import {
    CommentContent,
    DisplayName,
    NameWrapper,
    Replay,
    ReplayBtn, ReplyingTo,
    User,
    UserImage,
    UserInfo,
    UserName
} from "../FeedbackStyle";

export default function SingleReplay({replayData,handleOnClick}) {
    return (
        <Replay>
            <User>
                <UserInfo>
                    <UserImage src={replayData.user.image}/>
                    <NameWrapper>
                        <DisplayName>{replayData.user.name}</DisplayName>
                        <UserName>{replayData.user.username}</UserName>
                    </NameWrapper>
                </UserInfo>
                <ReplayBtn onClick={()=>handleOnClick(replayData.user.username)}>Replay</ReplayBtn>
            </User>
            <CommentContent>
                <ReplyingTo>@{replayData.replyingTo} </ReplyingTo>
                {replayData.content}
            </CommentContent>
        </Replay>
    )
}