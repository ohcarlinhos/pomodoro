import styled from "vue3-styled-components";

export const Table = styled.table`
  width: 100%;
  font-size: 1.4rem;
  line-height: 1.4rem;
  border-collapse: inherit;
  border: 1px solid #ededf9;
`;

Table.name = "Table";

export const Row = styled.tr`
  &:nth-child(even) {
    background: #fff;
  }
  &:hover {
    background: #fffbf7;
  }
`;

Row.name = "Table Line";

export const Header = styled.th`
  font-size: 1.4rem;
  line-height: 1.4rem;
  padding: 20px 20px;
  text-align: left;
  font-weight: 500;
  background: #f7f8fd;
`;

Header.name = "Table Header";

export const Cell = styled.td`
  padding: 15px 20px;
`;

Cell.name = "Table Cell";
