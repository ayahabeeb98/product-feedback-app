import React, {useState} from 'react';
import {
    BtnsContainer, ErrorMsg,
    FeedbackBox, FloatingCircle, FormBtnAdd, FormCancel,
    FormControl,
    FormGroup,
    FormHeading,
    FormLabel,
    FormWrapper,
    InputHint, PageWrapper,
} from "./FeedbackStyle";
import FeedbackHeader from "./Component/Header";
import Icon from "../../assets/shared/icon-new-feedback.svg"
import SelectList from "./Component/SelectList";

const TAGS = ['UI', 'UX', 'enhancement', 'bug', 'feature']
const tagsSelectData = {label: 'Category', hint: 'Choose a category for your feedback'}

export default function AddFeedback() {
    const [category, setCategory] = useState('feature')
    const [isError] = useState(false);

    const handleSelectCategory = (category) => {
        setCategory(category)
    }


    return (
        <PageWrapper>
            <FeedbackHeader/>

            <FormWrapper>
                <FloatingCircle>
                    <img src={Icon} alt="new feedback icon" style={{width: '100%'}}/>
                </FloatingCircle>

                <FormHeading>Create New Feedback</FormHeading>

                <FormGroup>
                    <FormLabel>Feedback Title</FormLabel>
                    <InputHint>Add a short, descriptive headline</InputHint>
                    <FormControl/>
                </FormGroup>

                <SelectList formGroupData={tagsSelectData} handleChange={handleSelectCategory} listItem={TAGS}/>
                <input type="hidden" value={category}/>

                <FormGroup>
                    <FormLabel>Feedback Detail</FormLabel>
                    <InputHint>Include any specific comments on what should be improved, added, etc.</InputHint>
                    <FeedbackBox error={isError}/>
                    {isError &&
                    <ErrorMsg>
                        Can’t be empty
                    </ErrorMsg>
                    }
                </FormGroup>

                <BtnsContainer>
                    <FormBtnAdd>Add Feedback</FormBtnAdd>
                    <FormCancel type="reset">Cancel</FormCancel>
                </BtnsContainer>

            </FormWrapper>
        </PageWrapper>
    )
}