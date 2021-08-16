import React, {useContext, useState} from 'react';
import {default as UUID} from "node-uuid";
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
import {SuggestionsContext} from "../../context/SuggestionsContext";
import {useHistory} from "react-router-dom";

const TAGS = ['UI', 'UX', 'enhancement', 'bug', 'feature']
const tagsSelectData = {label: 'Category', hint: 'Choose a category for your feedback'}

export default function AddFeedback() {
    const suggestions = useContext(SuggestionsContext)
    const [title,setTitle] = useState('')
    const [category, setCategory] = useState('feature')
    const [description,setDescription] = useState('')
    const [isError,setIsError] = useState(false);
    const history = useHistory();

    const handleSelectCategory = (category) => {
        setCategory(category)
    }

    const handleReset = () => {
        setTitle('')
        setCategory('')
        setDescription('')
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsError(false);
        if(title && description) {
            const feedback = {
                id:  UUID.v4(),
                title,
                category,
                description,
                upvotes:0,
                status:'planned'
            }

            suggestions.suggestionsData.push(feedback)
            const clonedSuggestions = [...suggestions.suggestionsData]

            suggestions.updateData('suggestionsData',clonedSuggestions);
            suggestions.updateData('filteredSuggestions',clonedSuggestions);
            history.push('/');
        }else {
            setIsError(true)
        }



    }


    return (
        <PageWrapper>
            <FeedbackHeader/>

            <FormWrapper onSubmit={handleSubmit}>
                <FloatingCircle>
                    <img src={Icon} alt="new feedback icon" style={{width: '100%'}}/>
                </FloatingCircle>

                <FormHeading>Create New Feedback</FormHeading>

                <FormGroup>
                    <FormLabel>Feedback Title</FormLabel>
                    <InputHint>Add a short, descriptive headline</InputHint>
                    <FormControl value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </FormGroup>

                <SelectList formGroupData={tagsSelectData} handleChange={handleSelectCategory} listItem={TAGS}/>
                <input type="hidden" value={category}/>

                <FormGroup>
                    <FormLabel>Feedback Detail</FormLabel>
                    <InputHint>Include any specific comments on what should be improved, added, etc.</InputHint>
                    <FeedbackBox error={isError} value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    {isError &&
                    <ErrorMsg>
                        Can’t be empty
                    </ErrorMsg>
                    }
                </FormGroup>

                <BtnsContainer>
                    <FormBtnAdd type="submit">Add Feedback</FormBtnAdd>
                    <FormCancel type="reset" onClick={()=>handleReset()}>Cancel</FormCancel>
                </BtnsContainer>

            </FormWrapper>
        </PageWrapper>
    )
}