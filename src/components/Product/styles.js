import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: left;
  }
  span {
    font-size: 1rem;
  }
  button {
    border: none;
    background-color: aquamarine;
    padding: 6px;
    font-size: 1rem;
  }
`;
