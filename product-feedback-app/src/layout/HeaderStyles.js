import styled from 'styled-components';
import mobileBg from '../assets/suggestions/mobile/background-header.png';
import tabletBg from '../assets/suggestions/tablet/background-header.png';
import desktopBg from '../assets/suggestions/desktop/background-header.png';

export const PageHeader = styled.header`
   
 
`;

export const MobileBanner = styled.div`
    display: flex;
    justify-content: space-between;
    background-image: url(${mobileBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: var(--white);
    padding: 1em 1.5em;
    @media screen and (min-width: 768px) {
        display: none;
    }
`;


export const Banner = styled.div`
    display: flex;
   
    width: 100%;
    padding: 1rem 1.5rem;
   
   
    @media screen and (min-width: 768px) {
        border-radius: 0.625rem;
        background-image: url(${tabletBg})
    }
    @media screen and (min-width: var(--desktop)) {
        background-image: url(${desktopBg});
    }
`;

export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (min-width: 768px) {
        justify-content: flex-end;
    }
`;

export const MainHeading = styled.h1`
    font-size: .937em;
    font-weight: 700;
    line-height: 1.5em;
    letter-spacing: -0.19px;
`;

export const SubHeader = styled.p`
    font-size: 0.8125em;
    font-weight: 500;
    line-height: 0.8125em;
    opacity: 0.75;
`;

export const ToggleBtn = styled.button`
    position: relative;
    right: -1em;
    padding: 0 1em;
    border: 0;
    background-color: transparent;
`;

