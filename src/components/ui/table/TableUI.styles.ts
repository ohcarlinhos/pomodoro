import styled from "vue3-styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Table = styled.table`
  width: 100%;
  font-size: 1.4rem;
  line-height: 1.4rem;
  border-collapse: inherit;
  border: 1px solid #ededf9;
  background-color: #fff;
`;

Table.name = "Table";

export const Row = styled.tr`
  &:nth-child(even) {
    background: #fff;
  }

  &:hover {
    background: #fffbf7;
  }

  &:last-of-type {
    td {
      border-bottom: 0px;
    }
  }

  .options {
    width: 60px;
    text-align: center;
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
  padding: 1.75rem 2rem;
  border-bottom: 1px solid #ededf9;
`;

Cell.name = "Table Cell";

export const EmptyText = styled.div`
  padding: 25px;
  border: 1px solid #ededf9;
  border-top: 0;
  text-align: center;
  background-color: #fff;
`;

Cell.name = "Empty Text";
