import styled from 'styled-components';

import { mediaQueries } from '../../../../utils/ui/mediaQueries';

const { small } = mediaQueries;

export const StyledCarousel = styled.div`
  .cookNowMobileSlide {
    width: 400px;
    margin: 0 auto;
    perspective: 1000px;
    
    &__container {
        width: 100%;
        position: relative;
        padding-bottom: 71.5%;
        transition: $flip-transition-duration cubic-bezier(0.175, 0.885, 0.320, 1.275);
        transform-style: preserve-3d;
    }
    
    &__front,
    &__back {
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 5px;
        background-size: cover;
        box-shadow: 25px 25px 50px rgba(black, 0.2);
    }
    
    &__front {
        z-index: 2;
        transform: rotateY(0deg);
    }
    
    &__back {
        transform: rotateY(180deg);
    }
    
    &.is-flipped {
        .cards__container {
            transform: rotateY(180deg);
        }
    }
`;
