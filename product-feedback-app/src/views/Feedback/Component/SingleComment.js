import React, {useContext, useState} from 'react';
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
import {default as UUID} from "node-uuid";
import {SuggestionsContext} from "../../../context/SuggestionsContext";
import {useParams} from 'react-router-dom';

export default function SingleComment({commentData}) {
    const [replyOpen, setReplyOpen] = useState(false)
    const [reply,setReply] = useState('');
    const suggestions = useContext(SuggestionsContext)
    const [replyTo,setReplyTo] = useState('')
    const [isError,setIsError] = useState(false);
    const { id } = useParams()

    const handleReplayClick = (username) => {
        setReplyOpen(true)
        setReplyTo(username)
    }

    const handleOnChange = e => {
        const val = e.target.value
        setReply(val)
    }

    const handlePostReply = () => {
        if (reply) {
            setIsError(false)
            const replyObj = {
                id:UUID.v4(),
                content: reply,
                replyingTo:replyTo,
                user: {id: UUID.v4(),...suggestions.user}
            }

            if(commentData.replies) {
                commentData.replies.push(replyObj)
            }else {
                commentData.replies = [replyObj]
            }


            const mappedSuggestions = suggestions.suggestionsData.map(item=>{
                if(item.id === Number(id) || item.id === id){
                    item.comments.map(comment => {
                        return comment.id === commentData.id ? commentData : comment
                    })
                    return item;
                }
                return item;
            })

            suggestions.updateData('suggestionsData',mappedSuggestions);
            setReply('')
            setReplyOpen(false)
        }else {
            setIsError(true)
        }



    }



    return (
        <>
            <Comment hasReplies={commentData.replies && !replyOpen}>
                <User>
                    <UserInfo>
                        <UserImage src={commentData.user.image}/>
                        <NameWrapper>
                            <DisplayName>{commentData.user.name}</DisplayName>
                            <UserName>@{commentData.user.username}</UserName>
                        </NameWrapper>
                    </UserInfo>
                    <ReplayBtn onClick={()=>handleReplayClick(commentData.user.username)}>Replay</ReplayBtn>
                </User>
                <CommentContent>
                    {commentData.content}
                </CommentContent>
                {
                    commentData.replies &&
                    <RepliesList replies={commentData.replies} handleReply={handleReplayClick}/>
                }
                {replyOpen &&
                <ReplayForm replayOpen={replyOpen}>
                    <ReplyInput error={isError} value={reply} onChange={handleOnChange}/>
                    <BtnReplay onClick={handlePostReply}>Post Reply</BtnReplay>
                </ReplayForm>
                }


            </Comment>


        </>

    )
}