import styled from "styled-components";

interface ListProps {
  backgroundColor: string;
  color: string;
}

export const Container = styled.main`
  width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--gray-background);
  margin-top: 4rem;
  border-radius: 0.4rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &.title::after {
      content: "";
      display: block;
      height: 1px;
      width: 100%;
      background-color: #ddd;
      margin-top: 5rem;
      position: absolute;
    }
  }
  h1 {
    align-self: center;
  }
`;

export const ListTable = styled.div<ListProps>`
  margin-top: 2rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--gray-text);
      padding: 1rem 1.5rem;
      text-align: left;
      font-weight: 400;
    }

    td {
      text-align: left;
      padding: 1rem 1.5rem;
      border: 0;
      background-color: ${(p) => p.backgroundColor};
      color: ${(p) => p.color};
      box-sizing: border-box;
      img {
        width: 30px;
        height: 30px;
      }
      a {
        color: var(--red-dark-text);
        position: relative;
        font-weight: 500;
        &::after {
          content: "";
          display: block;
          height: 1px;
          width: 100%;
          background-color: var(--red-dark-text);
          margin-top: -2px;
          position: absolute;
        }
        &:hover {
          filter: brightness(0.2);
        }
      }
    }
  }
`;
