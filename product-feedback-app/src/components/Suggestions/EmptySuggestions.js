import React from 'react';
import {SuggestionWrapper, SuggestionsTitle, SuggestionsText} from './SuggestionsStyle';
import {BtnAdd} from './HeaderStyle';
import EmptySuggestion from "../../assets/suggestions/illustration-empty.svg";

export default function EmptySuggestions() {
    return (
        <SuggestionWrapper>
            <img src={EmptySuggestion} style={{minWidth: '20%'}} alt=""/>
            <SuggestionsTitle>There is no feedback yet.</SuggestionsTitle>
            <SuggestionsText>
                Got a suggestion? Found a bug that needs to be squashed?
                We love hearing about new ideas to improve our app.
            </SuggestionsText>
            <BtnAdd>
                + Add Feedback
            </BtnAdd>
        </SuggestionWrapper>
    )
}
