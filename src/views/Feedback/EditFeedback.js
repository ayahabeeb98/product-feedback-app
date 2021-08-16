import React, { useState} from 'react';
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
import {useHistory} from "react-router-dom";
import useSuggestions from "../../context/useSuggestions";

const TAGS = ['UI', 'UX', 'enhancement', 'bug', 'feature']
const STATUS = ['planned','suggestion','in-progress','live']
const tagsSelectData = {label: 'Category',hint:'Choose a category for your feedback'}
const statusSelectData = {label: 'Update Status',hint:'Change feedback state'}

export default function EditFeedback({match}) {
    const suggestions = useSuggestions()
    const selectedSuggestion = React.useMemo(
        ()=> {
             return suggestions.suggestionsData
                .filter(item => item.id === Number(match.params.id) || item.id === match.params.id)[0];
        }
    ,[match.params.id,suggestions.suggestionsData])


    const [title,setTitle] = useState(selectedSuggestion.title)
    const [category,setCategory] = useState(selectedSuggestion.category)
    const [status, setStatus] = useState(selectedSuggestion.status);
    const [description,setDescription] = useState(selectedSuggestion.description)
    const [isError,setIsError] = useState(false);
    const history = useHistory();

    const handleSelectCategory = (category) => {
        setCategory(category)
    }

    const handleSelectStatus = (status) => {
        setStatus(status)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsError(false);

        if (title && description) {
            const clonedSuggestions = [...suggestions.suggestionsData];
            clonedSuggestions.map(item => {
                if (item.id === Number(match.params.id)){
                    item.title = title
                    item.category = category
                    item.status = status
                    item.description = description
                }
                return item
            })

            suggestions.updateData('suggestionsData',clonedSuggestions);
            suggestions.updateData('filteredSuggestions',clonedSuggestions);
            history.push('/');
        }else {
            setIsError(true)
        }
    }

    const handleReset = () => {
        setTitle(selectedSuggestion.title)
        setCategory(selectedSuggestion.category)
        setStatus(selectedSuggestion.status)
        setDescription(selectedSuggestion.description)
    }

    return (
        <PageWrapper>
            <FeedbackHeader />

            <FormWrapper  onSubmit={handleSubmit}>
                <FloatingCircle edit={true}>
                    <img src={Icon} alt="new feedback icon" style={{width: '100%'}}/>
                </FloatingCircle>

                <FormHeading>Editing ‘{selectedSuggestion.title}’</FormHeading>

                <FormGroup>
                    <FormLabel>Feedback Title</FormLabel>
                    <InputHint>Add a short, descriptive headline</InputHint>
                    <FormControl value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </FormGroup>

                <SelectList formGroupData={{...tagsSelectData, category}} handleChange={handleSelectCategory} listItem={TAGS}/>
                <input type="hidden" value={category} />

                <SelectList formGroupData={{...statusSelectData,category:status}} handleChange={handleSelectStatus} listItem={STATUS}/>
                <input type="hidden" value={status} />

                <FormGroup>
                    <FormLabel>Feedback Detail</FormLabel>
                    <InputHint>Include any specific comments on what should be improved, added, etc.</InputHint>
                    <FeedbackBox error={isError} value={description} onChange={e=>setDescription(e.target.value)}/>
                    {isError &&
                    <ErrorMsg>
                        Can’t be empty
                    </ErrorMsg>
                    }
                </FormGroup>

                <BtnsContainer>
                    <FormBtnAdd type="submit">Save Changes</FormBtnAdd>
                    <FormCancel type="reset" onClick={()=>handleReset()}>Cancel</FormCancel>
                    <FormDelete>Delete</FormDelete>
                </BtnsContainer>
            </FormWrapper>
        </PageWrapper>
    )
}