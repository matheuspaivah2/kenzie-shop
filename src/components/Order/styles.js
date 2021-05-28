import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  column-gap: 10%;
  width: 90%;
  max-width: 95%;
  margin-top: 5%;
`;
export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 65%;
`;

export const ContainerResume = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 20%;
  max-width: 20%;
  height: 150px;

  h3 {
    font-size: 1.5rem;
  }
  div {
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    span {
      font-size: 1rem;
    }
  }

  button {
    border: none;
    border-radius: 4px;
    width: 200px;
    background-color: #f66a98;
    padding: 6px;
    font-size: 1rem;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #cb3e55;
    }
  }
`;
