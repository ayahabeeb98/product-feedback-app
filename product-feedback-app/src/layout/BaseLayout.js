import React from 'react';
import Aside from "./components/Aside";
import {Container} from "./LayoutStyle";

const BaseLayout = ({children}) => {
    return (
        <Container>
            <Aside />

            <section className="pageContent">
                    {children}
            </section>

        </Container>
    )
};


export default BaseLayout;
