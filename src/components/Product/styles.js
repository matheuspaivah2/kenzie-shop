import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 390px;
  row-gap: 5%;

  ${({ btActive }) =>
    !btActive &&
    `
    flex-direction: row;
    justify-content: space-around;
    width: 900px;
    height: 220px;
    
  `}
  /* ${({ btActive }) =>
    !btActive &&
    `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 800px;
    `} */
 
    figure {
    width: 230px;
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 210px;
    height: 210px;
  }

  p {
    text-align: center;
    font-size: 0.9rem;
    width: 250px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    font-size: 1rem;
  }
  .btn {
    border: none;
    border-radius: 4px;
    width: 200px;
    background-color: #f66a98;
    padding: 6px;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ btActive }) =>
      !btActive &&
      `
    width: 4px;
    height: 150px;
    writing-mode: vertical-lr;
    align-self: flex-end;
    word-wrap: break-word;
    white-space: pre-wrap;
    padding: 16px;
  `}

    &:hover {
      background-color: #cb3e55;
    }
  }
`;
