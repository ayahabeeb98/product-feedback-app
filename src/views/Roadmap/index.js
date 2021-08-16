import React, {useState} from "react";
import {
    RoadmapContainer,
    StatusGroups,
    TabNav
} from "./RoadmapStyle";

import Header from "./components/Header";
import useSuggestions from "../../context/useSuggestions";
import Tabs from "./components/Tabs";
import SuggestionsList from "./components/SuggestionsList";


export default function Roadmap() {
    const [currentTab, setCurrenTab] = useState('in-progress')
    const suggestions = useSuggestions()

    const memoizedCallback = key => {
        return suggestions.suggestionsData
            .filter(item => item.status === key);
    }

    const suggestionGroups = {
        InProgress: memoizedCallback("in-progress"),
        Live: memoizedCallback("live"),
        Planned: memoizedCallback("planned")
    }

    const tabs = [
        {
            id: 1,
            name: 'planned',
            subTitle: 'Ideas prioritized for research',
            list: suggestionGroups.Planned,
            length: suggestionGroups.Planned.length
        },
        {
            id: 2,
            name: 'in-progress',
            subTitle: 'Currently being developed',
            list: suggestionGroups.InProgress,
            length: suggestionGroups.InProgress.length
        },
        {
            id: 3,
            name: 'live',
            subTitle: 'Released features',
            list: suggestionGroups.Live,
            length: suggestionGroups.Live.length
        }
    ]

    return (
        <RoadmapContainer>
            <Header/>
            <TabNav>
                {tabs.map(tab => <Tabs key={tab.id} data={tab} currentTab={currentTab} handleClick={setCurrenTab}/>)}
            </TabNav>
            <StatusGroups>
                {tabs.map(tab => <SuggestionsList key={tab.id} data={tab} currentTab={currentTab}/>)}
            </StatusGroups>
        </RoadmapContainer>
    )
}