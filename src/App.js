import React, {Suspense, useEffect, useState} from "react";
import {BrowserRouter, Switch, Redirect, Route} from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import GlobalStyle from "./GlobalStyle"
import {RouteWrapper} from "./routes/RouteWrapper";
import {DATA} from "./db/data";
import {SuggestionsContext} from './context/SuggestionsContext';
import Loading from "./components/Loading";
import Footer from "./components/Footer";

const Home = React.lazy(() => import("./views/Home"));
const FeedBack = React.lazy(() => import("./views/Feedback/"))
const AddFeedBack = React.lazy(() => import("./views/Feedback/AddFeedback"))
const EditFeedback = React.lazy(() => import("./views/Feedback/EditFeedback"))
const Roadmap = React.lazy(() => import("./views/Roadmap"))

function App() {
    const [suggestions, setSuggestions] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let suggestionsData = DATA.productRequests.sort((a, b) => (b.upvotes - a.upvotes));
        let currentCategory = 'All';
        let filteredSuggestions = [...suggestionsData];
        setSuggestions({user:DATA.currentUser,suggestionsData, currentCategory, filteredSuggestions, updateData})
    }, [])

    const value = React.useMemo(() => {
        setLoading(false)
        return {
            ...suggestions,
        }
    }, [suggestions])


    const updateData = (key, value) => {
        setSuggestions(prevSuggestions => {
            return {...prevSuggestions, [key]: value}
        })
    };

    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Switch>
                <Suspense fallback={<Loading/>}>
                    {!loading &&
                    <SuggestionsContext.Provider value={value}>

                        <RouteWrapper path="/" exact component={Home} layout={BaseLayout}/>

                        <Route path="/feedback/:id" component={FeedBack}/>
                        <Route path="/add-feedback" component={AddFeedBack}/>
                        <Route path="/edit-feedback/:id" component={EditFeedback}/>
                        <Route path="/roadmap" component={Roadmap}/>
                        <Footer/>

                    </SuggestionsContext.Provider>
                    }
                </Suspense>

                <Redirect to='/'/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
