import React from 'react';
import {BackText, LeftSide, PageHeading, RoadmapHeader} from "../RoadmapStyle";
import {BackLink} from "../../Feedback/FeedbackStyle";
import {BtnAdd} from "../../../components/Suggestions/HeaderStyle";
import {useHistory} from "react-router-dom";

export default function Header(){
    const history = useHistory();

    const goToAdd = () => {
        history.push('/add-feedback');
    }

    return (
        <RoadmapHeader>
            <LeftSide>
                <BackLink>
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L2 5L6 1" stroke="#CDD2EE" strokeWidth="2"/>
                    </svg>
                    <BackText onClick={() => history.goBack()}>
                        Go Back
                    </BackText>
                </BackLink>
                <PageHeading>
                    Roadmap
                </PageHeading>
            </LeftSide>
            <BtnAdd onClick={() => goToAdd()}>
                + Add Feedback
            </BtnAdd>
        </RoadmapHeader>
    )
}