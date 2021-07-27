import React from 'react';
import {BoxWrapper,BoxTitleWrapper,BoxMainTitle,BoxLink,RoadMapItem,ItemNumber} from './BoxStyle';

export default function RoadMapBox() {
    return (
        <BoxWrapper>
            <BoxTitleWrapper>
                <BoxMainTitle>
                    Roadmap
                </BoxMainTitle>
                <BoxLink>
                    view
                </BoxLink>
            </BoxTitleWrapper>

            <ul style={{width:"100%"}}>
                <RoadMapItem>
                    <p>
                        Planned
                    </p>
                    <ItemNumber>
                        2
                    </ItemNumber>
                </RoadMapItem>
                <RoadMapItem>
                    <p>
                        In-Progress
                    </p>
                    <ItemNumber>
                        3
                    </ItemNumber>
                </RoadMapItem>
                <RoadMapItem>
                    <p>
                        Live
                    </p>
                    <ItemNumber>
                        1
                    </ItemNumber>
                </RoadMapItem>
            </ul>
        </BoxWrapper>
    )
}