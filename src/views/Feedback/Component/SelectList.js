import React, {useState} from 'react';
import {CategoriesList, FormGroup, FormLabel, InputHint, SelectOption} from "../FeedbackStyle";
import {OptionItem, SelectedOption} from "../../../components/Suggestions/HeaderStyle";

export default function SelectList({formGroupData,listItem,handleChange}) {
    const [selectedOption, setSelectedOption] = useState(formGroupData.category || listItem[0]);
    const [listOpen, setListOpen] = useState(false);

    const handleFilterChange = (val) => {
        setSelectedOption(val);
        handleChange(val);
        setListOpen(!listOpen)
    }


    const handleOnClick = e => {
        e.preventDefault();
        setListOpen(!listOpen)
    }


    const mappedList = listItem.map(item => {
            const ActiveOption = selectedOption === item ? SelectedOption : OptionItem;
            return <ActiveOption onClick={() => handleFilterChange(item)} key={item}>
                {item}
            </ActiveOption>
        }
    );

    return (
        <FormGroup>
            <FormLabel>{formGroupData.label}</FormLabel>
            <InputHint>{formGroupData.hint}</InputHint>
            <SelectOption open={listOpen} onClick={(e) => handleOnClick(e)}>{selectedOption}</SelectOption>
            {
                listOpen &&
                <CategoriesList>
                    {mappedList}
                </CategoriesList>
            }
        </FormGroup>
    )
}