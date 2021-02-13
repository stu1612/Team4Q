import React, { Fragment } from 'react';
import { Header } from '../components/header/Header.components';
import { CardsContainerTop } from '../components/cards/Cards_Container_Top.components';
import { BannerContainerTop } from '../components/banners/Banner_Container_Top.component';
import { CardsContainerBottom } from '../components/cards/Cards_Container_Bottom.component';
import { BannerContainerBottom } from '../components/banners/Banner_Container_Bottom.component';
import { NextFixture } from '../components/next-fixture/Next_Fixture.component';
import { CarouselFixtures } from '../components/carousel/CarouselFixtures.component';
import { Sponsors } from '../components/sponsors/Sponsors.component';

export const Home = () => (
    <Fragment>
        <Header />
        <CardsContainerTop />
        <BannerContainerTop />
        <NextFixture />
        <CardsContainerBottom />
        <BannerContainerBottom />
        <CarouselFixtures />
        <Sponsors />
    </Fragment>
);
