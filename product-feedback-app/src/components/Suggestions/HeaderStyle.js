import styled from 'styled-components';

export const HomeHeader = styled.header`
  background-color: var(--navbar-color);
  color: var(--light-gray);
  padding: .5em 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (min-width: 768px) {
    border-radius: 10px;
    margin-bottom: 1.5em;
    padding: .875em 1em .875em 1.5em;    
  }
  
   @media screen and (min-width: 992px) {
    margin-top: 0;
   }
`;

export const FilterHeading = styled.span`
  font-size: 0.8125em;
  @media screen and (min-width: 768px) {
    font-size: 0.875em;
  }
`;

export const FilterOptions = styled.button`
    background-color: transparent;
    font-weight: 600;
    font-size: 0.8125em;
    color: var(--light-gray);
    position: relative;
    padding-right: 1.2em;
    border: 0;
    margin-left: .5em;
    cursor: pointer;

    &::after {
        content: '';
        width: 8px;
        height: 8px;
        border-width: 0 0 2px 2px;
        border-style: solid;
        border-color: var(--light-gray);
        transform: rotate(315deg);
        position: absolute;
        right: 0;
        top: 20%;
    }
`;

export const BtnAdd = styled.button`
    background-color: var(--purple-color);
    color: var(--light-gray);
    font-size: 0.8125em;
    font-weight: 700;
    padding: 0.807em 1.23em;
    border-radius: 10px;
    border: 1px solid transparent;
    cursor: pointer;  
    transition: all 300ms ease-in-out;
    
    &:hover {
      background-color: #C75AF6;
    }  
`;

export const SuggestionHeading = styled.h3`
  font-weight: 700;
  font-size: 1.125em;
  margin-right: 2em;
  margin-left: .88em;
`;




