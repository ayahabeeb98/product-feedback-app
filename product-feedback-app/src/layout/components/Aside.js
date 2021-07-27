import React, {useState, useEffect} from 'react';
import {AsideWrapper, Header, HeadrText, MainText, SubText, ToggleBtn} from "./AsideStyle";
import CloseIcon from "../../assets/shared/mobile/icon-close.svg";
import OpenIcon from "../../assets/shared/mobile/icon-hamburger.svg";
import TagsBox from "./TagsBox";
import MobileNav from "./MobileNav";
import RoadMapBox from "./RoadMapBox";


export default function Aside() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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
        // document.body.classList.toggle('overlay')
    };

    return (
        <AsideWrapper>
            <Header>
                <HeadrText>
                    <MainText>Frontend Mentor</MainText>
                    <SubText>Feedback Board</SubText>
                </HeadrText>

                {
                    isMobile &&
                    <ToggleBtn aria-label='Toggle menu' aria-expanded={isNavOpen}
                               aria-haspopup='true' onClick={toggleNav}>
                        <img src={isNavOpen ? CloseIcon : OpenIcon} alt=""/>
                    </ToggleBtn>
                }
            </Header>
            {isMobile ?
            <MobileNav isOpen={isNavOpen}/>
            :
            <>
                <TagsBox/>
                <RoadMapBox/>
            </>}
        </AsideWrapper>
    )
}
