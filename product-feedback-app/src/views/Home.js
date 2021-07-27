import React from 'react';
import SuggestionsHeader from '../components/Suggestions/SuggestionsHeader'
import EmptySuggestion from "../assets/suggestions/illustration-empty.svg";

export default function Home() {
    return (
        <>
           <SuggestionsHeader/>
            <img src={EmptySuggestion} style={{width:'20%'}} alt=""/>
        </>
    )
}
