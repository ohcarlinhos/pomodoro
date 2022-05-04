import styled, { css } from "vue3-styled-components";

export const CardContainer = styled.div`
  ${() => css`
    width: 450px;
    border-radius: 15px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    display: flex;
    flex-direction: column;
  `}
`;

CardContainer.name = "Card Container";

export const Header = styled.div`
  ${() => css`
    padding: 20px 30px;
  `}
`;

Header.name = "Header";

export const Title = styled.h3`
  ${() => css`
    font-size: 1.6rem;
    font-weight: 500;
  `}
`;

Title.name = "Title";

export const BodySlot = styled.div`
  ${() => css`
    border-top: 1px solid #eaeaea;
    padding: 30px;
  `}
`;

BodySlot.name = "Body Slot";

export const FooterSlot = styled.div`
  ${() => css`
    padding: 20px 30px;
    border-top: 1px solid #eaeaea;
    display: flex;
    gap: 10px;
  `}
`;

FooterSlot.name = "Footer Slot";
