import React from 'react';
import styled from 'styled-components';

export const CardSmall = (props) => {
    return <StyledCardSmall>{props.title}</StyledCardSmall>;
};

const StyledCardSmall = styled.div`
    height: 100px;
    width: 90%;
    background: blue;
    margin: var(--margin-1) auto 0;

    @media screen and (min-width: 650px) {
        width: 28%;
        height: 300px;
        margin: var(--margin-1) 10px 0;
    }
    @media screen and (min-width: 850px) {
        width: 30%;
    }
`;
