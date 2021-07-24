import React from 'react';
import Header from "./components/Header";
import Aside from "./components/Aside";

const BaseLayout = ({children}) => {
    return (
        <>
            <Header/>
                <main className="pageContent">
                    {children}
                </main>
            <Aside />
        </>
    )
};


export default BaseLayout;
