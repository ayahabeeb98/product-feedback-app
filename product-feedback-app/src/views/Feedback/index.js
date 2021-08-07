import React, {useContext} from 'react';
import {
    AddCommentBox,
    BtnPost, CommentInput, CommentRule,
    CommentsTitle, Rule,
    Wrapper
} from "./FeedbackStyle";
import SingleSuggestion from "../../components/Suggestions/SingleSuggestion";
import FeedbackHeader from "./Component/Header";
import {SuggestionsContext} from "../../context/SuggestionsContext";
import {useHistory} from "react-router-dom";
import CommentsList from "./Component/CommentsList";


export default function FeedBack({match}) {
    const history = useHistory();

    const suggestions = useContext(SuggestionsContext)
    const selectedSuggestion = suggestions.suggestionsData.filter(item => item.id === Number(match.params.id) || item.id === match.params.id)[0];

    const handleFiltering = (key) => {
        let filteredList = suggestions.suggestionsData.filter(item => item.category === key)
        suggestions.updateData('filteredSuggestions', filteredList);
        suggestions.updateData('currentCategory', key)
        history.push('/');
    }

    return (
        <Wrapper>
            <FeedbackHeader/>

            <SingleSuggestion suggestion_id={selectedSuggestion.id} filterByTag={handleFiltering}
                              info={selectedSuggestion}/>

            {selectedSuggestion.comments && <CommentsList comments={selectedSuggestion.comments}/>}


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