import React, {useState} from 'react';
import {
    BtnsContainer, CategoriesList, ErrorMsg,
    FeedbackBox, FloatingCircle, FormBtnAdd, FormCancel,
    FormControl,
    FormGroup,
    FormHeading,
    FormLabel,
    FormWrapper,
    InputHint, PageWrapper,
    SelectCategory,
} from "./FeedbackStyle";
import FeedbackHeader from "./Component/Header";
import Icon from "../../assets/shared/icon-new-feedback.svg"
import {OptionItem, SelectedOption} from "../../components/Suggestions/HeaderStyle";

const TAGS = ['UI', 'UX', 'enhancement', 'bug', 'feature']

export default function AddFeedback() {
    const [selectedTag, setSelectedTag] = useState('feature');
    const [selectOpen, setSelectOpen] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleFilterChange = (tag) => {
        setSelectedTag(tag);
        setSelectOpen(!selectOpen)
    };

    const handleOnClick = e => {
        e.preventDefault();
        setSelectOpen(!selectOpen)
    }


    const tagsList = TAGS.map(item => {
            const ActiveOption = selectedTag === item ? SelectedOption : OptionItem;
            return <ActiveOption onClick={() => handleFilterChange(item)} key={item}>
                {item}
            </ActiveOption>
        }
    );
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

                <FormGroup>
                    <FormLabel>Category</FormLabel>
                    <InputHint>Choose a category for your feedback</InputHint>
                    <SelectCategory open={selectOpen} onClick={(e) => handleOnClick(e)}>{selectedTag}</SelectCategory>
                    {
                        selectOpen &&
                        <CategoriesList>
                            {tagsList}
                        </CategoriesList>
                    }
                </FormGroup>

                <input type="hidden" value={selectedTag}/>

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