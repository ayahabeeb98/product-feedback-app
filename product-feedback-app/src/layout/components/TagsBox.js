import React, {useContext} from 'react';
import {BoxWrapper, Tag} from './BoxStyle';
import {SuggestionsContext} from '../../context/SuggestionsContext'

export default function TagsBox() {
    const suggestions = useContext(SuggestionsContext)
    console.log(suggestions);

    return (
        <BoxWrapper>
            <Tag selected>All</Tag>
            <Tag>UI</Tag>
            <Tag>UX</Tag>
            <Tag>Enhancement</Tag>
            <Tag>Bug</Tag>
            <Tag>Feature</Tag>
        </BoxWrapper>
    )
}
