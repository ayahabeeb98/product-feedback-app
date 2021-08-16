import React from 'react';
import {TabLink} from "../RoadmapStyle";

export default function Tabs({data,currentTab,handleClick}){
    return(
        <TabLink active={currentTab === data.name} onClick={()=>handleClick(data.name)}>
            {data.name} ({data.length})
        </TabLink>
    )
}