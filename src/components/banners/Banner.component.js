import React from 'react';
import styled from 'styled-components';

export const Banner = (props) => {
    return (
        <StyledBanner>
            <img src={props.url} alt='' />
            <p>{props.title}</p>
        </StyledBanner>
    );
};

const StyledBanner = styled.div`
    width: 90%;
    height: 30vh;
    margin: var(--margin-3) auto;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    @media screen and (min-width: 800px) {
        height: 40vh;
    }

    @media screen and (min-width: 1200px) {
        width: 60%;

        img {
            object-position: top;
        }
    }
`;
