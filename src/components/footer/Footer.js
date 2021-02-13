import React from 'react';
import styled from 'styled-components';

export const Footer = () => (
    <StyledFooter>
        <h3>Team fourth quarter</h3>
        <p>Furutorpsgatan 38</p>
        <p>25227, Helsingborg</p>
        <a href='mailto:info@team4q.se?subject=Hej%20Team4Q!'>info@team4q.se</a>
    </StyledFooter>
);

const StyledFooter = styled.footer`
    height: 50vh;
    width: 100%;
    background: #b8b8bd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        background-color: black;
        color: white;
        padding: var(--padding-1);
        text-transform: uppercase;
        margin: var(--margin-1) 0;
    }
`;
