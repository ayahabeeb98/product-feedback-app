import React from 'react';
import {MobileMenu} from "./AsideStyle";
import TagsBox from "./TagsBox";
import RoadMapBox from "./RoadMapBox";

export default function MobileNav({isOpen}) {
    return (
        <MobileMenu open={isOpen}>
            <TagsBox/>
            <RoadMapBox/>
        </MobileMenu>

    )
}
