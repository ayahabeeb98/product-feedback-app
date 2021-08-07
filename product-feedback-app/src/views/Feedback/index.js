import React, {useContext, useState} from 'react';
import {
    AddCommentBox,
    BtnPost, BtnReplay, Comment, CommentContent, CommentInput, CommentRule,
    Comments,
    CommentsTitle, DisplayName, NameWrapper, Replay, ReplayBtn, ReplayForm, ReplyInput, Rule,
    User, UserImage,
    UserInfo, UserName,
    Wrapper
} from "./FeedbackStyle";
import SingleSuggestion from "../../components/Suggestions/SingleSuggestion";
import avatar from "../../assets/user-images/image-elijah.jpg";
import FeedbackHeader from "./Component/Header";
import {SuggestionsContext} from "../../context/SuggestionsContext";


export default function FeedBack({match}) {
    const [replayOpen,setReplayOpen] = useState(false)

    const suggestions = useContext(SuggestionsContext)
    const selectedSuggestion = suggestions.suggestionsData.filter(item=>item.id=== Number(match.params.id))[0];

    return (
        <Wrapper>
            <FeedbackHeader/>

            <SingleSuggestion suggestion_id={selectedSuggestion.id} info={selectedSuggestion}/>

            <Comments>
                <CommentsTitle>
                    4 Comments
                </CommentsTitle>
                <Comment>
                    <User>
                        <UserInfo>
                            <UserImage src={avatar}/>
                            <NameWrapper>
                                <DisplayName>Elijah Moss</DisplayName>
                                <UserName>@hexagon.bestagon</UserName>
                            </NameWrapper>
                        </UserInfo>
                        <ReplayBtn onClick={()=>setReplayOpen(!replayOpen)}>Replay</ReplayBtn>
                    </User>
                    <CommentContent>
                        Also, please allow styles to be applied based on system preferences. I would love to be able to
                        browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright
                        background it currently has.
                    </CommentContent>
                    {replayOpen &&
                        <ReplayForm replayOpen={replayOpen}>
                            <ReplyInput/>
                            <BtnReplay>Post Reply</BtnReplay>
                        </ReplayForm>
                    }
                </Comment>

                <Comment>
                    <User>
                        <UserInfo>
                            <UserImage src={avatar}/>
                            <NameWrapper>
                                <DisplayName>Elijah Moss</DisplayName>
                                <UserName>@hexagon.bestagon</UserName>
                            </NameWrapper>
                        </UserInfo>
                        <ReplayBtn>Replay</ReplayBtn>
                    </User>
                    <CommentContent>
                        Also, please allow styles to be applied based on system preferences. I would love to be able to
                        browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright
                        background it currently has.
                    </CommentContent>

                    <Replay>
                        <User>
                            <UserInfo>
                                <UserImage src={avatar}/>
                                <NameWrapper>
                                    <DisplayName>Elijah Moss</DisplayName>
                                    <UserName>@hexagon.bestagon</UserName>
                                </NameWrapper>
                            </UserInfo>
                            <ReplayBtn>Replay</ReplayBtn>
                        </User>
                        <CommentContent>
                            Also, please allow styles to be applied based on system preferences. I would love to be able
                            to
                            browse Frontend Mentor in the evening after my device’s dark mode turns on without the
                            bright
                            background it currently has.
                        </CommentContent>
                    </Replay>

                    <Replay>
                        <User>
                            <UserInfo>
                                <UserImage src={avatar}/>
                                <NameWrapper>
                                    <DisplayName>Elijah Moss</DisplayName>
                                    <UserName>@hexagon.bestagon</UserName>
                                </NameWrapper>
                            </UserInfo>
                            <ReplayBtn>Replay</ReplayBtn>
                        </User>
                        <CommentContent>
                            Also, please allow styles to be applied based on system preferences. I would love to be able
                            to
                            browse Frontend Mentor in the evening after my device’s dark mode turns on without the
                            bright
                            background it currently has.
                        </CommentContent>
                    </Replay>

                    <Replay>
                        <User>
                            <UserInfo>
                                <UserImage src={avatar}/>
                                <NameWrapper>
                                    <DisplayName>Elijah Moss</DisplayName>
                                    <UserName>@hexagon.bestagon</UserName>
                                </NameWrapper>
                            </UserInfo>
                            <ReplayBtn>Replay</ReplayBtn>
                        </User>
                        <CommentContent>
                            Also, please allow styles to be applied based on system preferences. I would love to be able
                            to
                            browse Frontend Mentor in the evening after my device’s dark mode turns on without the
                            bright
                            background it currently has.
                        </CommentContent>
                    </Replay>
                </Comment>
            </Comments>

            <AddCommentBox>
                <CommentsTitle>Add Comment</CommentsTitle>
                <CommentInput placeholder='Type your comment here'/>
                <CommentRule>
                    <Rule>250 Characters left</Rule>
                    <BtnPost>Post Comment</BtnPost>
                </CommentRule>
            </AddCommentBox>

        </Wrapper>
    )
}