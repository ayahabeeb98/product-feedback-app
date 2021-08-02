import React, {useEffect, useState} from 'react';
import SuggestionsHeader from '../components/Suggestions/SuggestionsHeader'
import EmptySuggestions from '../components/Suggestions/EmptySuggestions'
import {DATA} from '../db/data';
import SingleSuggestion from "../components/Suggestions/SingleSuggestion";

export default function Home() {
    const [suggestions, setSuggestions] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setSuggestions(DATA.productRequests.sort((a, b) => (b.upvotes - a.upvotes)))
        setLoading(true)
    }, [])

    const handleUpvote = (id) => {
        const suggestionsClone = suggestions.map(item => {
            if (item.id === id) {
                return {...item, upvotes: item.upvotes + 1}
            } else {
                return item
            }
        })
        setSuggestions(suggestionsClone)
    }



    const sortSuggestions = (key) => {
        let sortedSuggestions = suggestions.map(item => {
            item.comments ? item.commentsCount = item.comments.length : item.commentsCount = 0
            return item
        });

        if (key === 'mUpvotes') {
            sortedSuggestions = suggestions.sort((a, b) => (
                b.upvotes - a.upvotes
            ));
        } else if (key === 'lUpvotes') {
            sortedSuggestions = suggestions.sort((a, b) => (
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
        setSuggestions(sortedSuggestions.map(i => i))
    }

    const filteredSuggestions = (key) => {
        let filteredList = suggestions.filter(item => item.category === key)
        setSuggestions(filteredList);
    }

    //TODO
    //Filter Suggestions By Tag Name
    //Display a single suggestion, add, edit

    return (
        <>
            <SuggestionsHeader handleSortType={sortSuggestions}/>
            {suggestions && loading ?
                suggestions.map(req =>
                    <SingleSuggestion key={req.id} filterByTag={filteredSuggestions} suggestion={req} upvote={handleUpvote}/>
                )
                :
                <EmptySuggestions/>
            }
        </>
    )
}
