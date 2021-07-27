import React from 'react';
import {BoxWrapper, Tag} from './BoxStyle';

export default function TagsBox() {
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
