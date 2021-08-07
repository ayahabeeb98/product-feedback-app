import React, {useState} from 'react';
import {
    PageWrapper,
    FormWrapper,
    FloatingCircle,
    FormHeading,
    FormGroup,
    FormLabel,
    InputHint,
    FormControl,
    FeedbackBox,
    ErrorMsg,
    BtnsContainer,
    FormBtnAdd,
    FormCancel,
    FormDelete
} from "./FeedbackStyle";
import FeedbackHeader from "./Component/Header";
import Icon from "../../assets/shared/icon-edit-feedback.svg";
import SelectList from "./Component/SelectList";

const TAGS = ['UI', 'UX', 'enhancement', 'bug', 'feature']
const STATUS = ['Planned','Suggestion','In-Progress','Live']
const tagsSelectData = {label: 'Category',hint:'Choose a category for your feedback'}
const statusSelectData = {label: 'Update Status',hint:'Change feedback state'}

export default function EditFeedback() {
    const [status, setStatus] = useState('Planned');
    const [isError] = useState(false);
    const [category,setCategory] = useState('feature')

    const handleSelectCategory = (category) => {
        setCategory(category)
    }

    const handleSelectStatus = (status) => {
        setStatus(status)
    }

    return (
        <PageWrapper>
            <FeedbackHeader/>

            <FormWrapper>
                <FloatingCircle edit={true}>
                    <img src={Icon} alt="new feedback icon" style={{width: '100%'}}/>
                </FloatingCircle>

                <FormHeading>Editing ‘Add a dark theme option’</FormHeading>

                <FormGroup>
                    <FormLabel>Feedback Title</FormLabel>
                    <InputHint>Add a short, descriptive headline</InputHint>
                    <FormControl/>
                </FormGroup>

                <SelectList formGroupData={tagsSelectData} handleChange={handleSelectCategory} listItem={TAGS}/>
                <input type="hidden" value={category} />

                <SelectList formGroupData={statusSelectData} handleChange={handleSelectStatus} listItem={STATUS}/>
                <input type="hidden" value={status} />

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
                    <FormBtnAdd>Save Changes</FormBtnAdd>
                    <FormCancel type="reset">Cancel</FormCancel>
                    <FormDelete>Delete</FormDelete>
                </BtnsContainer>
            </FormWrapper>
        </PageWrapper>
    )
}