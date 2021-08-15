import React, {useCallback, useState} from "react";
import {
    RoadmapContainer,
    StatusGroup,
    StatusGroups,
    StatusHeading,
    StatusSubTitle,
    TabLink,
    TabNav
} from "./RoadmapStyle";

import Header from "./components/Header";
import useSuggestions from "../../context/useSuggestions";
import SuggestionStatusBox from "./components/SuggestionStatusBox";


export default function Roadmap(){
    const [currentTab,setCurrenTab] = useState('in-progress')
    const suggestions = useSuggestions()
    console.log(suggestions);

    const memoizedCallback = useCallback(
        key => {
            return suggestions.suggestionsData
                .filter(item => item.status === key);
        },[suggestions]
    )

    const suggestionGroups = React.useMemo(
        ()=> {
            return {
                InProgress: memoizedCallback("in-progress"),
                Live : memoizedCallback("live"),
                Planned: memoizedCallback( "planned")
            }
        }
        ,[memoizedCallback])

    const changeTab = (key) => {
        setCurrenTab(key)
    }

    return (
        <RoadmapContainer>
           <Header />
            <TabNav>
                <TabLink active={currentTab === 'planned'} onClick={()=>changeTab('planned')}>Planned ({suggestionGroups.Planned.length})</TabLink>
                <TabLink active={currentTab === 'in-progress'} onClick={()=>changeTab('in-progress')}>In-progress ({suggestionGroups.InProgress.length})</TabLink>
                <TabLink active={currentTab === 'live'} onClick={()=>changeTab('live')}>Live ({suggestionGroups.Live.length})</TabLink>
            </TabNav>
            <StatusGroups>
                <StatusGroup active={currentTab === 'planned'}>
                    <StatusHeading>Planned ({suggestionGroups.Planned.length})</StatusHeading>
                    <StatusSubTitle>Ideas prioritized for research</StatusSubTitle>
                    {suggestionGroups.Planned.map(item => <SuggestionStatusBox  info={item} key={item.id}/>)}
                </StatusGroup>
                <StatusGroup active={currentTab === 'in-progress'}>
                    <StatusHeading>In-progress ({suggestionGroups.InProgress.length})</StatusHeading>
                    <StatusSubTitle>Currently being developed</StatusSubTitle>
                    {suggestionGroups.InProgress.map(item => <SuggestionStatusBox  info={item} key={item.id}/>)}
                </StatusGroup>
                <StatusGroup active={currentTab === 'live'}>
                    <StatusHeading>Live ({suggestionGroups.Live.length})</StatusHeading>
                    <StatusSubTitle>Released features</StatusSubTitle>
                    {suggestionGroups.Live.map(item => <SuggestionStatusBox  info={item} key={item.id}/>)}
                </StatusGroup>

            </StatusGroups>
        </RoadmapContainer>
    )
}