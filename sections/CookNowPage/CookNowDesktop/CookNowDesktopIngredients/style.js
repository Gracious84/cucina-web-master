import styled from 'styled-components';

export const StyledIngredients = styled.div`
  .cookNowDesktopIngredientsHead {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    button {
      box-shadow: -2px 2px 0 0 rgba(0, 0, 0, 0.1);
    }

    .cookNowDesktopIngredientsTitle {
      font-size: 24px;
      font-weight: bold;
      line-height: 1.33;
      text-align: center;
      color: #57534e;
      margin: 0;
    }
  }

  .cookNowDesktopIngredientsList {
    max-height: 50vh;
    overflow: auto;
    padding-right: 50px;
  }
`;
