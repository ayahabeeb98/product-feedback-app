import React from 'react';
import {RoadMapBoxWrapper, BoxTitleWrapper, BoxMainTitle, BoxLink, RoadMapItem, ItemNumber} from './BoxStyle';
import {Link} from "react-router-dom";

export default function RoadMapBox() {
    return (
        <RoadMapBoxWrapper>
            <BoxTitleWrapper>
                <BoxMainTitle>
                    Roadmap
                </BoxMainTitle>
                <Link to={'/roadmap'}>
                    <BoxLink>
                        view
                    </BoxLink>
                </Link>
            </BoxTitleWrapper>

            <ul style={{width: "100%"}}>
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
        </RoadMapBoxWrapper>
    )
}
