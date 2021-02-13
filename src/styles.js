import styled from 'styled-components';

export const StyledLargeBackground = styled.div`
    width: 100%;
    height: auto;
    /* margin: var(--margin-1) auto 0; */
    margin: auto;
    background: var(--white);

    @media screen and (min-width: 800px) {
        background: var(--light-gray);
        width: 90%;
    }
`;

export const StyledThinBackground = styled.div`
    width: 100%;
    height: auto;
    margin: auto;
    background: var(--white);
    position: relative;

    @media screen and (min-width: 800px) {
        &::before {
            content: '';
            position: absolute;
            height: 510px;
            top: -60px;
            width: 100px;
            background-color: var(--light-gray);
            left: 50%;
            transform: translate(-50%, 0%);
            z-index: -10;
        }
    }
`;

export const StyledFlexWrapper = styled.div`
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media screen and (min-width: 800px) {
        width: 80%;
        margin: var(--margin-2) auto;
        padding: var(--padding-1) 0;
    }
`;
