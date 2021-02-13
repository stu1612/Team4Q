import React from "react";
import { StyledLargeBackground, StyledFlexWrapper } from "../../styles";
import { CardLarge } from "./Card_Large.component";

export const CardsContainerBottom = () => {
  return (
    <StyledLargeBackground>
      <StyledFlexWrapper>
        <CardLarge title="video 1" />
        <CardLarge title="video 2" />
      </StyledFlexWrapper>
    </StyledLargeBackground>
  );
};
