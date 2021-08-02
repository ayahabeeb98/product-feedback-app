import React from 'react';
import Aside from "./components/Aside";
import {Container} from "./LayoutStyle";
import {SuggestionsContext} from '../context/SuggestionsContext'
import {DATA} from "../db/data";

const BaseLayout = ({children}) => {
    return (
        <Container>
            <SuggestionsContext.Provider value={DATA.productRequests}>
                <Aside />

                <section>
                        {children}
                </section>
            </SuggestionsContext.Provider>
        </Container>
    )
};


export default BaseLayout;
