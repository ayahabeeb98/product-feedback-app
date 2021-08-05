import React, {useContext} from 'react';
import {BoxWrapper, Tag} from './BoxStyle';
import {SuggestionsContext} from '../../context/SuggestionsContext'

const TAGS = ['All','UI','UX','enhancement','bug','feature']

export default function TagsBox() {
    const suggestions = useContext(SuggestionsContext)
    const handleClick = (tagName) => {
        if (tagName === 'All') {
            suggestions.updateData('filteredSuggestions',suggestions.suggestionsData);
        }else {
            let filteredList = suggestions.suggestionsData.filter(item => item.category === tagName)
            suggestions.updateData('filteredSuggestions',filteredList);
        }

        suggestions.updateData('currentCategory',tagName)
    }


    return (
        <BoxWrapper>
            {TAGS.map(tag =>  <Tag key={tag} onClick={()=>handleClick(tag)} selected={tag===suggestions.currentCategory}>{tag}</Tag>)}

        </BoxWrapper>
    )
}
