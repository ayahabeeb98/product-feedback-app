import React, {useContext, useState} from 'react';
import {
    AddCommentBox,
    BtnPost, CommentInput, CommentRule,
    CommentsTitle, ErrorMsg, Rule,
    Wrapper
} from "./FeedbackStyle";
import SingleSuggestion from "../../components/Suggestions/SingleSuggestion";
import FeedbackHeader from "./Component/Header";
import {SuggestionsContext} from "../../context/SuggestionsContext";
import {useHistory} from "react-router-dom";
import CommentsList from "./Component/CommentsList";
import {default as UUID} from "node-uuid";


export default function FeedBack({match}) {
    const [comment,setComment] = useState('')
    // const [trimmedComment,setTrimmedComment] = useState('')
    const [isError,setIsError] = useState(false);
    const [commentLength,setCommentLength] = useState(250)
    const history = useHistory();

    const suggestions = useContext(SuggestionsContext)
    const selectedSuggestion = suggestions.suggestionsData.filter(item => item.id === Number(match.params.id) || item.id === match.params.id)[0];

    const handleFiltering = (key) => {
        let filteredList = suggestions.suggestionsData.filter(item => item.category === key)
        suggestions.updateData('filteredSuggestions', filteredList);
        suggestions.updateData('currentCategory', key)
        history.push('/');
    }

    const handleChange = e => {
        const val = e.target.value;
        let previousVal = '';
        setComment(prevVal=>{
            previousVal = prevVal
            return val
        })
        val.length === 0 ? setCommentLength(250) : setCommentLength(state=>{
            return state - ( val.length - previousVal.length)
        });

        if(commentLength < 0) {
            //Highlight the text that will be removed
        }

    }

    const handleAddComment = (e) => {
        setCommentLength(state=> state - comment.length)
        const commentContent = commentLength < 0 ? comment.substring(0,250) : comment;
        if (comment) {
            setIsError(false)
            const commentData = {
                id:UUID.v4(),
                content: commentContent,
                user: {id: UUID.v4(),...suggestions.user}
            }

            selectedSuggestion.comments.push(commentData);

            const mappedSuggestions = suggestions.suggestionsData.map(item=>{
                if(item.id === Number(match.params.id) || item.id === match.params.id){
                    item = selectedSuggestion
                    return item;
                }
                return item;
            })

            suggestions.updateData('suggestionsData',mappedSuggestions);
            setComment('')
            setCommentLength(250)
        }else {
            setIsError(true)
        }
    }

    return (
        <Wrapper>
            <FeedbackHeader/>

            <SingleSuggestion suggestion_id={selectedSuggestion.id} filterByTag={handleFiltering}
                              info={selectedSuggestion}/>

            {selectedSuggestion.comments && <CommentsList comments={selectedSuggestion.comments}/>}


            <AddCommentBox>
                <CommentsTitle>Add Comment</CommentsTitle>
                <CommentInput error={isError} value={comment} onChange={handleChange} placeholder='Type your comment here'/>
                {isError &&
                <ErrorMsg>
                    Can’t be empty
                </ErrorMsg>
                }
                <CommentRule>
                    <Rule className={commentLength < 0 && 'text-error'}>
                        {commentLength} Characters left
                        {/*{commentLength < 0 && <RuleBreak>{trimmedComment}</RuleBreak> }*/}
                    </Rule>
                    <BtnPost onClick={(e)=>handleAddComment(e)}>Post Comment</BtnPost>
                </CommentRule>
            </AddCommentBox>

        </Wrapper>
    )
}