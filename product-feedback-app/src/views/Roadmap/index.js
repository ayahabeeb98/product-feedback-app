import React from "react";
import {RoadmapContainer, StatusBox, StatusGroup} from "./RoadmapStyle";

import Header from "./components/Header";

export default function Roadmap(){

    return (
        <RoadmapContainer>
           <Header />
            <StatusGroup>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
                <StatusBox/>
            </StatusGroup>
        </RoadmapContainer>
    )
}