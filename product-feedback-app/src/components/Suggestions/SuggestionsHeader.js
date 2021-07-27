import React from 'react';
import {HomeHeader,FilterHeading,FilterOptions,BtnAdd,SuggestionHeading} from './HeaderStyle';
import SuggestionIcon from "../../assets/suggestions/icon-suggestions.svg";

export default function SuggestionsHeader() {
    return (
        <HomeHeader>
            <div style={{display:'flex',alignItems: 'center'}}>
                <div className="logoWrapper">
                    <img src={SuggestionIcon} alt=""/>
                    <SuggestionHeading>
                        6 Suggestions
                    </SuggestionHeading>
                </div>
                <FilterHeading>sort by :</FilterHeading>
                <FilterOptions>Most Upvotes</FilterOptions>
            </div>
            <BtnAdd>
                + Add Feedback
            </BtnAdd>
        </HomeHeader>
    )
}
