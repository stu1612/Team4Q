import React from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';

import { fixtureData } from '../../data/fixtureData';

export const CarouselFixtures = () => {
    let breakPoints = [
        { width: 1, itemsToShow: 1, pagination: false },
        { width: 760, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ];
    return (
        <Carousel
            breakPoints={breakPoints}
            style={{ backgroundColor: '#ebebeb' }}
        >
            {fixtureData.map((fixture) => (
                <SlideStyle>
                    <StyledCardFixture>{fixture.home}</StyledCardFixture>
                </SlideStyle>
            ))}
        </Carousel>
    );
};

const SlideStyle = styled.div`
    height: 60vh;
    max-height: 500px;
    width: 100%;
    background-color: var(--light-gray);
    display: flex;
    justify-content: center;
`;

const StyledCardFixture = styled.div`
    background-color: white;
    width: 230px;
    height: 70%;
    max-height: 300px;
    margin: auto 0;
`;
