import styled, { css } from "vue3-styled-components";

export const Button = styled.button`
  ${() => css`
    background: #605bff;
    padding: 10px 20px;
    border: none;
    color: #fff;
    border-radius: 8px;
    transition: 0.1s;
    height: 40px;

    &:hover {
      background: #554fff;
      cursor: pointer;
      filter: drop-shadow(4px 4px 0px #1e1a6134);
    }

    &:active {
      transform: translateY(2px);
    }

    &.full {
      width: 100%;
    }

    &:disabled {
      opacity: 0.5;
      filter: none;

      &:active {
        transform: none;
      }

      &:hover {
        background: #605bff;
        cursor: default;
      }
    }
  `}
`;

Button.name = "StyledButton";
