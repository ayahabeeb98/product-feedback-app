import React from 'react';
import {Wrapper} from "./FeedbackStyle";
import SingleSuggestion from "../../components/Suggestions/SingleSuggestion";


export default function FeedBack(props) {
    const {info} = props.location.suggestionProps
    return (
       <Wrapper>
           <SingleSuggestion key={info.id} suggestion={info} />
       </Wrapper>
    )
}