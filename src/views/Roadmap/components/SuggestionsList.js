import React from "react";
import {StatusGroup, StatusHeading, StatusSubTitle} from "../RoadmapStyle";
import SuggestionStatusBox from "./SuggestionStatusBox";

export default function SuggestionsList({data,currentTab}){
    return (
        <StatusGroup active={currentTab === data.name}>
            <StatusHeading>{data.name} ({data.length})</StatusHeading>
            <StatusSubTitle>{data.subTitle}</StatusSubTitle>
            {data.list.map(item => <SuggestionStatusBox info={item} key={item.id}/>)}
        </StatusGroup>
    )
}