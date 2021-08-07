import React from "react";
import {Spinner, Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5, SpinnerWrapper} from "./LoadingStyle";

export default function Loading() {
    return (
        <SpinnerWrapper>
            <Spinner>
                <Rectangle1/>
                <Rectangle2/>
                <Rectangle3/>
                <Rectangle4/>
                <Rectangle5/>
            </Spinner>
        </SpinnerWrapper>

    )
}