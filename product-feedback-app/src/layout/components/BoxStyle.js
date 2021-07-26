import styled from 'styled-components';

export const TagsWrapper = styled.div`
    width: 225px;
    border-radius: 10px;
    margin: 0 auto;
    background-color: var(--white);
    display:flex;
    flex-wrap: wrap;
    gap: 0.875rem 0.5rem;
    padding: 1.5em 1.125em 2.25em 1.5em;
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
            background-color: var(--medium-blue);
        }
    }
`;

