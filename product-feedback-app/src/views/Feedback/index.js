import React from 'react';
import {
    AddCommentBox,
    BackLink,
    BackLinkText,
    Banner,
    BtnEdit, BtnPost, Comment, CommentContent, CommentInput, CommentRule,
    Comments,
    CommentsTitle, DisplayName, NameWrapper, Replay, ReplayBtn, Rule,
    User, UserImage,
    UserInfo, UserName,
    Wrapper
} from "./FeedbackStyle";
import SingleSuggestion from "../../components/Suggestions/SingleSuggestion";
import avatar from "../../assets/user-images/image-elijah.jpg";


export default function FeedBack(props) {
    const {info} = props.location.suggestionProps
    return (
        <Wrapper>
            <Banner>
                <BackLink>
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L2 5L6 1" stroke="#4661E6" strokeWidth="2"/>
                    </svg>
                    <BackLinkText>
                        Go Back
                    </BackLinkText>
                </BackLink>
                <BtnEdit>
                    Edit Feedback
                </BtnEdit>
            </Banner>

            <SingleSuggestion key={info.id} suggestion={info}/>

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
                        <ReplayBtn>Replay</ReplayBtn>
                    </User>
                    <CommentContent>
                        Also, please allow styles to be applied based on system preferences. I would love to be able to
                        browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright
                        background it currently has.
                    </CommentContent>
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
                            Also, please allow styles to be applied based on system preferences. I would love to be able to
                            browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright
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
                            Also, please allow styles to be applied based on system preferences. I would love to be able to
                            browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright
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
                            Also, please allow styles to be applied based on system preferences. I would love to be able to
                            browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright
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