import React, {useEffect, useState} from 'react';
import Aside from "./components/Aside";
import {Container} from "./LayoutStyle";
import {SuggestionsContext} from '../context/SuggestionsContext'
import {DATA} from "../db/data";

const BaseLayout = ({children}) => {
    const [suggestions, setSuggestions] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let suggestionsData = DATA.productRequests.sort((a, b) => (b.upvotes - a.upvotes));
        let currentCategory = 'All';
        setSuggestions({suggestionsData, currentCategory, updateData})
        setLoading(false)
    }, [])

    const updateData = (key, value) => {
        setSuggestions(prevSuggestions => {
            return {...prevSuggestions, [key]: value}
        })
    };

    return (
        <Container>
            {!loading &&
            <SuggestionsContext.Provider value={suggestions}>
                <Aside/>

                <section>
                    {children}
                </section>
            </SuggestionsContext.Provider>
            }
        </Container>
    )
};


export default BaseLayout;
