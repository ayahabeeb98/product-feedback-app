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
export default function SuggestionsHeader({handleSortType}) {
    const [filtersOpen,setFiltersOpen] = useState(false);
    const [filterKey,setFilterKey] = useState( {name: "Most Upvotes",key:"mUpvotes"});

    const handleFilterChange = (filterOption) => {
        setFilterKey(filterOption);
        setFiltersOpen(!filterOption)
        handleSortType(filterOption.key)
    };

    const filtersList = FILTERS.map(item => {
        const ActiveOption = filterKey.key === item.key ? SelectedOption : OptionItem;
        return <ActiveOption onClick={()=> handleFilterChange(item)} key={item.key}>
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
                <FilterOptions onClick={()=>setFiltersOpen(!filtersOpen)}>{filterKey.name}</FilterOptions>
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
