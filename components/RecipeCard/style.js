import styled from 'styled-components';

export const StyledCard = styled.div`
  .recipeCardThumbnail {
    margin-bottom: 16px;
  }

  .recipeCardFooter {
    align-items: center;
    display: flex;
    justify-content: space-between;

    .recipeCardTitle {
      color: #57534e;
      font-size: 16px;
      line-height: 1.25;
      margin-right: 15px;
      text-align: left;
      text-decoration: none;
    }

    .recipeCardActionButtons {
      align-items: center;
      display: flex;

      & > button {
        box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);

        &:first-child {
          margin-right: 12px;
        }
      }
    }
  }
`;
