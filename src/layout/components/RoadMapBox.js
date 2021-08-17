import React from 'react';
import {RoadMapBoxWrapper, BoxTitleWrapper, BoxMainTitle, BoxLink, RoadMapItem, ItemNumber} from './BoxStyle';
import {useHistory} from "react-router-dom";

export default function RoadMapBox() {
    const history = useHistory();

    const handleClick = () => {
        document.body.classList.remove('overlay')
        history.push('/roadmap');
    }

    return (
        <RoadMapBoxWrapper>
            <BoxTitleWrapper>
                <BoxMainTitle>
                    Roadmap
                </BoxMainTitle>

                <BoxLink onClick={handleClick}>
                    view
                </BoxLink>

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
