import styled from 'styled-components';

import { mediaQueries } from '../../../../utils/ui/mediaQueries';

const { small } = mediaQueries;

export const StyledSection = styled.div`
  .addCommentInput {
    margin-bottom: 16px;

    @media ${small} {
      margin-bottom: 24px;
    }
  }

  .recipeCommentsList {
    margin-bottom: 16px;

    @media ${small} {
      margin-bottom: 32px;
    }

    .recipeCommentWrapper {
      &:not(:last-child) {
        margin-bottom: 16px;

        @media ${small} {
          margin-bottom: 24px;
        }
      }

      .recipeComment {
        &:not(:last-child) {
          margin-bottom: 16px;

          @media ${small} {
            margin-bottom: 24px;
          }
        }
      }

      .recipeCommentReplies {
        padding-left: 35px;

        @media ${small} {
          padding-left: 85px;
        }
      }
    }
  }

  .viewAllButton {
    & > button {
      width: 100%;
      box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
    }
  }
`;
