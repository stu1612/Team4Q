import React from 'react';
import styled from 'styled-components';

export const CardLarge = (props) => {
    return <StyledCardLarge>{props.title}</StyledCardLarge>;
};

const StyledCardLarge = styled.div`
    height: 400px;
    width: 90%;
    background: blue;
    margin: var(--margin-1) auto 0;

    @media screen and (min-width: 600px) {
        width: 46%;
        margin: var(--margin-1) 10px 0;
    }

    @media screen and (min-width: 800px) {
        width: 46%;
        margin: 0 10px;
    }
`;
