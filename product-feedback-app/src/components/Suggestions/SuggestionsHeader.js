import React, {useState} from 'react';
import {HomeHeader,FilterHeading,FilterOptions,BtnAdd,
    SuggestionHeading,OptionsList,OptionItem,SelectedOption} from './HeaderStyle';
import SuggestionIcon from "../../assets/suggestions/icon-suggestions.svg";

const FILTERS = [
    {name: "Most Upvotes",key:"mUpvotes"},
    {name: "Least Upvotes", key: "lUpvotes"},
    {name: "Most Comments", key: "mComments"},
    {name: "Least Comments", key: "lComments"}
];
export default function SuggestionsHeader() {
    const [filtersOpen,setFiltersOpen] = useState(false);
    const [filterKey,setFilterKey] = useState('Most Upvotes');

    const handleFilterChange = (filterOption) => {
        setFilterKey(filterOption);
        setFiltersOpen(!filterOption)
    };

    const filtersList = FILTERS.map(item => {
        const ActiveOption = filterKey === item.name ? SelectedOption : OptionItem;
        return <ActiveOption onClick={()=> handleFilterChange(item.name)} key={item.key}>
                {item.name}
               </ActiveOption>
        }
    );

    return (
        <HomeHeader>
            <div style={{display:'flex',alignItems: 'center'}}>
                <div className="logoWrapper">
                    <img src={SuggestionIcon} alt=""/>
                    <SuggestionHeading>
                        6 Suggestions
                    </SuggestionHeading>
                </div>
                <FilterHeading>Sort by :</FilterHeading>
                <FilterOptions onClick={()=>setFiltersOpen(!filtersOpen)}>{filterKey}</FilterOptions>
                {
                    filtersOpen &&
                    <OptionsList>
                        {filtersList}
                    </OptionsList>
                }
            </div>
            <BtnAdd>
                + Add Feedback
            </BtnAdd>
        </HomeHeader>
    )
}
