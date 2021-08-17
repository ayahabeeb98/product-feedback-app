import styled from 'styled-components';
import mobileBg from '../../assets/suggestions/mobile/background-header.png';
import tabletBg from '../../assets/suggestions/tablet/background-header.png';
import desktopBg from '../../assets/suggestions/desktop/background-header.png';

export const AsideWrapper = styled.aside`
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    z-index: 2;
    overflow: ${props => props.open ? 'visible' : 'hidden'};
    
    @media screen and (min-width: 768px) {
      margin-bottom: 2.5em;
      grid-template-columns: repeat(auto-fit, minmax(223px, 1fr));
      grid-gap: 10px;
    }
    
     @media screen and (min-width: 1099px) {
        display: block;
     }
    
`;


export const Header = styled.header`
    background-image: url(${mobileBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em .75em;

  @media screen and (min-width: 370px) {
    padding:  1em 1.5em;
  }


  @media screen and (min-width: 768px) {
      justify-content: flex-start;
      align-items: flex-end;
      padding: 6.4375em 1.5em 1.5em 1.5em;
      background-image: url(${tabletBg});
      border-radius: 10px;
    }
    
     @media screen and (min-width: 1099px) {
       background-image: url(${desktopBg});
       padding-top: 3.875em;
       height: fit-content;
     }


`;

export const HeadrText = styled.section`
    display: flex;
    flex-direction: column;
   
    

`;

export const MainText = styled.h2`
  font-size: .937em;
  font-weight: 700;
  line-height: 1.5em;
  letter-spacing: -0.19px;
  user-select: none;
  
  @media screen and (min-width: 768px){
    font-size: 1.25em;
    letter-spacing: -0.25px;


  }
  
`;

export const SubText = styled.p`
    font-size: 0.8125em;
    font-weight: 500;
    line-height: 1.5em;
    letter-spacing: 0;
    opacity: 0.75;
    user-select: none;

  @media screen and (min-width: 768px){
      font-size: .9375em;
    }
`;

export const ToggleBtn = styled.button`
    position: relative;
    right: -.5em;
    padding: 0 1em;
    border: 0;
    height: 100%;
    background-color: transparent;
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    max-width: 271px;
    padding: 1.5em;
    position: absolute;
    top: 100%;
    background-color: var(--background-color);
    right:0;
   transform:${props => props.open ? "translateX(0)" : "translateX(100%)"};
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    transition: all .5s ease-in-out;
    z-index: 2;
    height: 100vh;
`;

