import React from "react";
import {Route} from 'react-router-dom';

export const RouteWrapper = ({component: Component, layout: Layout, ...rest}) => (
    <Route
        {...rest} render={(props) =>
        <Layout {...props}>
            <Component {...props} />
        </Layout>
    }/>
);
