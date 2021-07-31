import React, {useEffect, useState} from 'react';
import SuggestionsHeader from '../components/Suggestions/SuggestionsHeader'
import EmptySuggestions from '../components/Suggestions/EmptySuggestions'
import DATA from '../db/data';
import SingleSuggestion from "../components/Suggestions/SingleSuggestion";

export default function Home() {
    const [suggestions,setSuggestions] = useState(null)
    useEffect(()=>{
        setSuggestions(DATA)
    },[])


    return (
        <>
           <SuggestionsHeader/>
            {suggestions ?
                suggestions.productRequests.map(req=>
                    <SingleSuggestion key={req.id} suggestion={req}/>
                )
            :
               <EmptySuggestions/>
            }
        </>
    )
}
