import React, {Suspense, useEffect, useState} from "react";
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import GlobalStyle from "./GlobalStyle"
import {RouteWrapper} from "./routes/RouteWrapper";
import {DATA} from "./db/data";
import {SuggestionsContext} from './context/SuggestionsContext';

const Home = React.lazy(() => import("./views/Home"));
const FeedBack = React.lazy(() => import("./views/Feedback/"))
const AddFeedBack = React.lazy(() => import("./views/Feedback/AddFeedback"))

function App() {
    const [suggestions, setSuggestions] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let suggestionsData = DATA.productRequests.sort((a, b) => (b.upvotes - a.upvotes));
        let currentCategory = 'All';
        let filteredSuggestions = [...suggestionsData];
        setSuggestions({suggestionsData, currentCategory, filteredSuggestions, updateData})
        setLoading(false)
    }, [])

    const updateData = (key, value) => {
        setSuggestions(prevSuggestions => {
            return {...prevSuggestions, [key]: value}
        })
    };

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    {!loading &&
                    <SuggestionsContext.Provider value={suggestions}>

                        <RouteWrapper path="/" exact component={Home} layout={BaseLayout}/>

                        <Route path="/feedback" component={FeedBack}/>
                        <Route path="/add-feedback" component={AddFeedBack}/>
                    </SuggestionsContext.Provider>
                    }
                </Suspense>

                <Redirect to='/'/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
