import React from 'react';
import { StyledThinBackground } from '../../styles';
import { Banner } from './Banner.component';
import bannerImg1 from '../../img/images/sponsor.png';

export const BannerContainerTop = () => {
    return (
        <StyledThinBackground>
            <Banner url={bannerImg1} />
        </StyledThinBackground>
    );
};
