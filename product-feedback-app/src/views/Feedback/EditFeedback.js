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
    SelectCategory,
    CategoriesList,
    FeedbackBox,
    ErrorMsg,
    BtnsContainer,
    FormBtnAdd,
    FormCancel,
    FormDelete
} from "./FeedbackStyle";
import FeedbackHeader from "./Component/Header";
import Icon from "../../assets/shared/icon-edit-feedback.svg";
import {OptionItem, SelectedOption} from "../../components/Suggestions/HeaderStyle";

const TAGS = ['UI', 'UX', 'enhancement', 'bug', 'feature']
const STATUS = ['Planned','Suggestion','In-Progress','Live']

export default function EditFeedback() {
    const [selectedTag, setSelectedTag] = useState('feature');
    const [status, setStatus] = useState('Planned');
    const [selectOpen, setSelectOpen] = useState(false);
    const [statusOpen, setStatusOpen] = useState(false);
    const [isError] = useState(false);

    const handleFilterChange = (val,type = 'tags') => {
        if(type === 'tags') {
            setSelectedTag(val);
            setSelectOpen(!selectOpen)
            setStatusOpen(false)
        }else{
            setStatus(val);
            setStatusOpen(!statusOpen)
            setSelectOpen(false)

        }
    };

    const handleOnClick = (e,type = 'tags') => {
        e.preventDefault();
        type === 'tags' ? setSelectOpen(!selectOpen) : setStatusOpen(!statusOpen)
    }


    const tagsList = TAGS.map(item => {
            const ActiveOption = selectedTag === item ? SelectedOption : OptionItem;
            return <ActiveOption onClick={() => handleFilterChange(item)} key={item}>
                {item}
            </ActiveOption>
        }
    );

    const statusList = STATUS.map(item => {
        const ActiveOption = status === item ? SelectedOption : OptionItem;
        return <ActiveOption onClick={() => handleFilterChange(item,'status')} key={item}>
            {item}
        </ActiveOption>
    })

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

                <FormGroup>
                    <FormLabel>Category</FormLabel>
                    <InputHint>Choose a category for your feedback</InputHint>
                    <SelectCategory open={statusOpen} onClick={(e) => handleOnClick(e,'status')}>{status}</SelectCategory>
                    {
                        statusOpen &&
                        <CategoriesList>
                            {statusList}
                        </CategoriesList>
                    }
                </FormGroup>

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

                    <FormDelete>Delete</FormDelete>
                </BtnsContainer>

            </FormWrapper>
        </PageWrapper>

    )
}