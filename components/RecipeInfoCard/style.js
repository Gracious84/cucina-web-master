import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: #faf8f2;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0), -4px 4px 0 0 rgba(0, 0, 0, 0.1);
  padding: 24px;

  .recipeInfoCardInner {
    border: solid 1px #e6e3e1;
    padding: 30px;
  }

  .recipeInfoCardTitle {
    color: #57534e;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.25;
    margin: 0;
    margin-bottom: 22px;
  }

  .recipeInfoCardDescription {
    color: #57534e;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    margin-bottom: 30px;
  }

  .recipeInfoCardButtons {
    align-items: center;
    display: flex;
    justify-content: space-between;

    .recipeInfoCardMainButton {
      & > button {
        box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
        min-width: 150px;
        padding: 0 25px;
      }
    }

    .recipeInfoCardActionButtons {
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
