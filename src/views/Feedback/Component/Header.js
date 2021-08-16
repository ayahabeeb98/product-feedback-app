import React from 'react';
import {BackLink, BackLinkText, Banner, BtnEdit} from "../FeedbackStyle";
import {useHistory,useLocation,useParams} from "react-router-dom";

export default function FeedbackHeader(){
    const history = useHistory();
    let location = useLocation().pathname;
    let { id } = useParams();

    const goToEdit = () => {
        history.push(`/edit-feedback/${id}`);
    }

    return (
        <Banner>
            <BackLink>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L2 5L6 1" stroke="#4661E6" strokeWidth="2"/>
                </svg>
                <BackLinkText onClick={() => history.goBack()}>
                    Go Back
                </BackLinkText>
            </BackLink>
            { location === `/feedback/${id}` &&
                <BtnEdit onClick={()=>goToEdit()}>
                    Edit Feedback
                </BtnEdit>
            }
        </Banner>
    )
}