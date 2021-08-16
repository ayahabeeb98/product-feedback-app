import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: grid;
    
  @media screen and (min-width: 768px) {
    width: 90%;
    margin: 3.5em auto 7em;
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 1099px) {
    width: 77%;
    grid-template-columns: 255px 1fr;
    grid-gap: 1.875em;
    margin: 5.875em auto 8.0625em;
  }

`;
