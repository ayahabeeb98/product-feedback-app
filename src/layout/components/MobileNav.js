import React from 'react';
import {MobileMenu} from "./AsideStyle";
import TagsBox from "./TagsBox";
import RoadMapBox from "./RoadMapBox";

export default function MobileNav({isOpen,handleClick}) {
    return (
        <MobileMenu open={isOpen}>
            <TagsBox isMobile={true} toggleNav={handleClick}/>
            <RoadMapBox/>
        </MobileMenu>

    )
}
