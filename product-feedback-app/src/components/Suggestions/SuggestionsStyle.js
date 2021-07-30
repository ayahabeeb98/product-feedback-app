import styled from 'styled-components';

export const SuggestionWrapper = styled.div`
  margin: 2em auto 2.9em;
  width: 90%;
  background-color: var(--white);
  border-radius: 10px;
  padding: 4.75em 1.5em;
  text-align: center;
  
  @media screen and (min-width: 768px) {
    margin: 1.5em 0 3.375em;
    width: 100%;
    padding: 6.875em 8.75em;
  }
  
  @media screen and (min-width: 992px) {
    padding: 6.875em 13em;
    margin-bottom: 0;
  }
  

`;

export const SuggestionsTitle = styled.h3`
      font-weight: 700;
      font-size: 1.125em;
      margin-top: 2.16em;
      margin-bottom: .77em;
      color: var(--dark-blue);
      @media screen and (min-width: 768px) {  
        font-size: 1.5em;    
        margin-top: 2.219em;
        margin-bottom: .66em;
      }
`;

export const SuggestionsText = styled.p`
      font-size: 0.8125em;
      color: var(--grayish-blue);
      margin-bottom: 1.5em;
      
       @media screen and (min-width: 768px) {
          font-size: 1em;
          margin: 0 auto 3em auto;
       }
`;
