import styled, { css } from "vue3-styled-components";
import { defineProps } from "vue";

const Props = defineProps<{ disabled: boolean }>();

const disableLink = () => css`
  opacity: 0.5;

  &:hover {
    color: inherit;
    opacity: 0.6;
  }
`;

export const Link = styled("span", Props)`
  .link {
    text-decoration: none;
    color: ${(p) => p.theme.colors.textColor};

    &:hover {
      color: ${({ theme }) => theme.colors.primaryColor};
      cursor: pointer;
    }

    ${(p) => (p.disabled ? disableLink() : "")}
  }
`;

Link.name = "Link";
