import styled, { css } from "vue3-styled-components";

export const InputContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `}
`;

InputContainer.name = "Input Container";

export const Label = styled.label`
  ${() => css`
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 500;
  `}
`;

Label.name = "Label";

export const Input = styled.input`
  ${() => css`
    background-color: #fafafb;
    border: 1px solid #eaeaea;
    height: 40px;
    border-radius: 5px;
    text-indent: 15px;

    &:focus {
      outline: none;
      border: 1px solid #615cff7c;
    }

    [type="date"],
    [type="time"] {
      padding: 0px 15px;
      text-indent: 0;
    }

    [type="number"] {
      padding: 0px 15px;
      text-indent: 0;
    }
  `}
`;

Input.name = "Input";
