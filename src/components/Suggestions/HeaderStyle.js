import styled from 'styled-components';

export const HomeHeader = styled.header`
  background-color: var(--navbar-color);
  color: var(--light-gray);
  padding: .5em .75em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 2em;

  @media screen and (min-width: 370px) {
    padding: .5em 1.5em;
  }

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

export const OptionsList = styled.ul`
  border-radius: 10px;
  box-shadow: 0 10px 40px -7px rgba(55, 63, 104, .35);
  background-color: var(--white);
  position: absolute;
  top: 100%;
  left: 5%;
  margin-top: 1em;
  z-index: 3;

  @media screen and (min-width: 768px) {
    left: 30%;
  }
`;

export const OptionItem = styled.li`
  padding-top: .75em;
  padding-bottom: .75em;
  padding-left: 1.5em;
  min-width: 255px;
  color: var(--grayish-blue);
  transition: all 300ms ease-in-out;
  position: relative;
  cursor: pointer;
  text-transform: capitalize;

  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(58, 67, 116, .15);
  }


  &:hover {
    color: var(--purple-color)
  }
`;

export const SelectedOption = styled(OptionItem)`
  &::after {
    content: '✓';
    position: absolute;
    right: 1.5em;
    font-weight: bold;
    top: 20%;
    color: var(--purple-color);
  }
`;

export const BtnAdd = styled.button`
  background-color: var(--purple-color);
  color: var(--light-gray);
  font-size: 0.8125em;
  font-weight: 700;
  padding: 0.807em 1em;
  border-radius: 10px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  min-width: 134px;
  height: 40px;

  &:hover {
    background-color: #C75AF6;
  }

  @media screen and (min-width: 992px) {
    min-width: 158px;
    height: 44px;
  }
`;

export const SuggestionHeading = styled.h3`
  font-weight: 700;
  font-size: 1.125em;
  margin-right: 2em;
  margin-left: .88em;
`;




