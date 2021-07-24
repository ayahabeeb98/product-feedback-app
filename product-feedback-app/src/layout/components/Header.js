import React, {useState,useEffect} from 'react';
import {PageHeader,MobileBanner,HeaderText,MainHeading,SubHeader,ToggleBtn,HamburgerImg,CloseImg} from "../HeaderStyles";
import OpenIcon from '../../assets/shared/mobile/icon-hamburger.svg';
import CloseIcon from '../../assets/shared/mobile/icon-close.svg';

export default function Home() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() =>{
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };


    return (
        <PageHeader>
            {isMobile && <MobileBanner>
                <HeaderText>
                    <MainHeading>Frontend Mentor</MainHeading>
                    <SubHeader>Feedback Board</SubHeader>
                </HeaderText>
                <ToggleBtn aria-label='Toggle menu' aria-expanded={isNavOpen} aria-haspopup='true'
                           onClick={() => setIsNavOpen(!isNavOpen)}>
                    <img src={isNavOpen ? CloseIcon : OpenIcon} alt=""/>
                </ToggleBtn>
            </MobileBanner> }
        </PageHeader>
    )
}
