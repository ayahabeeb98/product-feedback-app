import React, {useState, useEffect} from 'react';
import {AsideWrapper, Header, HeadrText, MainText, SubText, ToggleBtn} from "./AsideStyle";
import CloseIcon from "../../assets/shared/mobile/icon-close.svg";
import OpenIcon from "../../assets/shared/mobile/icon-hamburger.svg";
import TagsBox from "./TagsBox";
import MobileNav from "./MobileNav";
import RoadMapBox from "./RoadMapBox";
import {useLocation} from "react-router-dom";


export default function Aside() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    let location = useLocation().pathname;

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        if (isMobile && isNavOpen) {
            document.body.classList.add('overlay')
        }else {
            document.body.classList.remove('overlay')
        }
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        console.log('clicked')
        // document.body.classList.toggle('overlay')
    };

    return (
        <AsideWrapper open={isNavOpen}>
            <Header>
                <HeadrText>
                    <MainText>Frontend Mentor</MainText>
                    <SubText>Feedback Board</SubText>
                </HeadrText>

                {
                    isMobile && location === `/` &&
                    <ToggleBtn aria-label='Toggle menu' aria-expanded={isNavOpen}
                               aria-haspopup='true' onClick={toggleNav}>
                        <img src={isNavOpen ? CloseIcon : OpenIcon} alt=""/>
                    </ToggleBtn>
                }
            </Header>
            {isMobile  ?
            <MobileNav handleClick={toggleNav} isOpen={isNavOpen}/>
            :
            <>
                <TagsBox/>
                <RoadMapBox/>
            </>}
        </AsideWrapper>
    )
}
