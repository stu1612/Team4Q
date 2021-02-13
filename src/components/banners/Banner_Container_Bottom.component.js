import React from 'react';
import { StyledThinBackground } from '../../styles';
import { Banner } from './Banner.component';
import bannerImg2 from '../../img/images/fans.png';

export const BannerContainerBottom = () => {
    return (
        <StyledThinBackground>
            <Banner url={bannerImg2} />
        </StyledThinBackground>
    );
};
