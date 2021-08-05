import React, {useContext} from 'react';
import SuggestionsHeader from '../components/Suggestions/SuggestionsHeader'
import EmptySuggestions from '../components/Suggestions/EmptySuggestions'
import SingleSuggestion from "../components/Suggestions/SingleSuggestion";
import {SuggestionsContext} from '../context/SuggestionsContext'

export default function Home() {
    const suggestions = useContext(SuggestionsContext)

    const handleUpvote = (id) => {
        const suggestionsClone = suggestions.filteredSuggestions.map(item => {
            if (item.id === id) {
                return {...item, upvotes: item.upvotes + 1}
            } else {
                return item
            }
        })
        suggestions.updateData('filteredSuggestions',suggestionsClone);
    }

    const sortSuggestions = (key) => {
        let sortedSuggestions = suggestions.filteredSuggestions.map(item => {
            item.comments ? item.commentsCount = item.comments.length : item.commentsCount = 0
            return item
        });

        if (key === 'mUpvotes') {
            sortedSuggestions = suggestions.filteredSuggestions.sort((a, b) => (
                b.upvotes - a.upvotes
            ));
        } else if (key === 'lUpvotes') {
            sortedSuggestions = suggestions.filteredSuggestions.sort((a, b) => (
                a.upvotes - b.upvotes
            ));
        } else if (key === 'mComments') {
            sortedSuggestions = sortedSuggestions.sort((a, b) => (
                b.commentsCount - a.commentsCount
            ));
        } else {
            sortedSuggestions = sortedSuggestions.sort((a, b) => (
                a.commentsCount -   b.commentsCount
            ));
        }

        //to reset object
        suggestions.updateData('filteredSuggestions',sortedSuggestions.map(i => i));
    }

    const filteredSuggestions = (key) => {
        let filteredList = suggestions.suggestionsData.filter(item => item.category === key)
        suggestions.updateData('filteredSuggestions',filteredList);
        suggestions.updateData('currentCategory',key)
    }

    //TODO

    //Display a single suggestion, add, edit

    return (
        <>
            <SuggestionsHeader handleSortType={sortSuggestions}/>
            {suggestions.filteredSuggestions.length > 0  ?
                suggestions.filteredSuggestions.map(req =>
                    <SingleSuggestion key={req.id} filterByTag={filteredSuggestions} suggestion={req} upvote={handleUpvote}/>
                )
                :
                <EmptySuggestions/>
            }
        </>
    )
}
