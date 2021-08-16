import styled from 'styled-components';

export const BoxWrapper = styled.div`
    width: 225px;
    border-radius: 10px;
    margin: 0 auto;
    background-color: var(--white);
    display:flex;
    flex-wrap: wrap;
    gap: 0.875rem 0.5rem;
    padding: 1.5em 1.125em 2.25em 1.5em;
    
    @media screen and (min-width: 992px){
      width: unset; 
      margin: 1.5em 0;
      padding-bottom: 1.5em;
    }
`;

export const RoadMapBoxWrapper = styled(BoxWrapper)`
  padding-top: 1.125em;
  padding-right: 1.5em;
  padding-bottom: 1.5em;
  gap: 0;
  max-height: 178px;
  
  @media screen and (min-width: 768px){
     width: unset; 
  }
   
  @media screen and (min-width: 992px){
     padding-top: 1em;
  }
  
   
   
`;


export const Tag = styled.button`
    padding: 0 1.23em;
    height: 2.307em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({selected}) => selected ? 'var(--light-blue)' : 'var(--light-gray)'};
    border: 0;
    letter-spacing: 0;
    border-radius: 10px;
    text-transform: capitalize;
    font-size: 0.8125em;
    font-weight: 600;
    color: ${({selected}) => selected ? 'var(--white)' : 'var(--light-blue)'};
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:active {
        background-color: var(--light-blue);
    }
    @media screen and (min-width: 768px) {
        &:hover {
            background-color: #CFD7FF;
        }
    }
`;

export const BoxTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1.5em;

`;

export const BoxMainTitle = styled.h3`
  font-size: 1.125em;
  letter-spacing: -0.25px;
  color: var(--dark-blue);
`;

export const BoxLink = styled.a`
   color: var(--light-blue);
   text-decoration: underline;
   text-transform: capitalize;
   cursor: pointer;
   transition: all 300ms ease-in-out;
   font-size: 0.8125em;
   &:hover {
      color: #8397F8;
   }
`;


export const RoadMapItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;  
    font-size: 1em;
    color: var(--grayish-blue);
    position: relative;
    padding-left: 1em;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    margin-bottom: .5em;
     &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 0.5rem;
        width: 0.5rem;
        border-radius: 50%;
    
    }
    &:first-of-type::before {
        background-color: var(--planned-color);
    }
    &:nth-of-type(2)::before {
        background-color: var(--purple-color);
    }
    &:last-of-type::before {
        background-color: var(--very-light-blue);
    }
    
     @media screen and (min-width: 768px) {
        padding-left: 1.5em; 
        &:hover {
           transform: scale(1.02);
        }
    }
`;

export const ItemNumber = styled.p`
  font-weight: 700;
`;


