import React from 'react';
import styled from 'styled-components';
import image from '../../img/images/basketball-court.jpg';

export const NextFixture = () => (
    <StyledFixtureContainer>
        <StyledFixtureTeams>
            <StyledT4Q>Team4Q</StyledT4Q>
            <StyledOpponent>Högsbo</StyledOpponent>
        </StyledFixtureTeams>
    </StyledFixtureContainer>
);

const StyledFixtureContainer = styled.div`
    width: 100%;
    background: url(${image}), #292626;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: soft-light;
    background-attachment: fixed;
    height: 60vh;
    margin-bottom: var(--margin-2);
    display: flex;
    justify-content: center;

    @media screen and (min-width: 800px) {
        margin-bottom: 0;
    }
`;

const StyledFixtureTeams = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
`;

const StyledT4Q = styled.h2`
    color: var(--red);
    text-transform: uppercase;
    font-family: var(--sub-heading);
    font-size: var(--fs-md);
    font-weight: var(--fw-medium);
    text-shadow: 1px 1px #8c0b0b;

    @media screen and (min-width: 768px) {
        font-size: var(--fs-lg);
    }
`;
const StyledOpponent = styled.h2`
    color: white;
    text-transform: uppercase;
    font-family: var(--sub-heading);
    font-size: var(--fs-md);
    font-weight: var(--fw-light);

    @media screen and (min-width: 768px) {
        font-size: var(--fs-lg);
    }
`;
