import React from 'react';
import {SuggestionWrapper, SuggestionsTitle, SuggestionsText} from './SuggestionsStyle';
import {BtnAdd} from './HeaderStyle';
import EmptySuggestion from "../../assets/suggestions/illustration-empty.svg";
import {useHistory} from "react-router-dom";

export default function EmptySuggestions() {
    const history = useHistory();

    const goToAdd = () => {
        history.push('/add-feedback');
    }

    return (
        <SuggestionWrapper>
            <img src={EmptySuggestion} className="emptyImg" alt=""/>
            <SuggestionsTitle>There is no feedback yet.</SuggestionsTitle>
            <SuggestionsText>
                Got a suggestion? Found a bug that needs to be squashed?
                We love hearing about new ideas to improve our app.
            </SuggestionsText>
            <BtnAdd onClick={() => goToAdd()}>
                + Add Feedback
            </BtnAdd>
        </SuggestionWrapper>
    )
}
