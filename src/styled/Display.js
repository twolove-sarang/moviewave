import styled, { css } from "styled-components";

const Display = styled.div`
  display: flex;
  justify-content : space-between;
  align-item : center;
  // border : 1px solid black;
  background-color : #006bbb;

  ${(props) =>
    props.main &&
    css`
      color: white;
      font-weight:800;
    `}

    ${(props) =>
      props.displayFlex &&
      css`
      display : flex;
      `}

  ${(props) =>
    props.menu &&
    css`
      color: #ffc872;
      padding: 5px;
      font-weight : 600;
      font-size : 16px;
      margin-left:10px;
      margin-right:10px;
      cursor : pointer;
      line-height : 32px;
    `}

    ${(props) =>
    props.input &&
    css`
      border: none;
      width: 150px;
      height: 25px;
      background-color : #ffe3b3;
      margin : 10px;
    `}
`;
export default Display