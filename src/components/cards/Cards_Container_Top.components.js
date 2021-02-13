import React from 'react';
import { StyledLargeBackground, StyledFlexWrapper } from '../../styles';

import { CardLarge } from './Card_Large.component';
import { CardSmall } from './Card_Small.component';

export const CardsContainerTop = (props) => {
    return (
        <StyledLargeBackground>
            <StyledFlexWrapper>
                <CardLarge title='card1' />
                <CardLarge title='card 2' />
                <CardSmall title='card 3' />
                <CardSmall title='card 4' />
                <CardSmall title='card 5' />
            </StyledFlexWrapper>
        </StyledLargeBackground>
    );
};

// </StyledFlexWrapper>
// <StyledFlexWrapper>
