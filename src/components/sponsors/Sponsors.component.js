import React from 'react';
import styled from 'styled-components';
import { sponsors } from './sponsorsData';

export const Sponsors = () => {
    return (
        <StyledSponsorLogo>
            {sponsors.map((sponsor) => (
                <a href={sponsor.url} rel='noopener noreferrer' target='_blank'>
                    <img src={sponsor.img} alt='sponsor' />
                </a>
            ))}
        </StyledSponsorLogo>
    );
};

const StyledSponsorLogo = styled.div`
    width: 95%;
    height: 100%;
    margin: var(--margin-4) auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    img {
        width: 100px;
        height: 100px;
        object-fit: contain;
    }
`;
