import styled from "styled-components";

export const Button = styled.button`
  border-radius: 5px;
  background: #000;
  color: white;
  padding: 10px 18px;
  width: 220px;
  border: 1px solid black;
  font-size: 16px;
  font-weight: 700;
  transition: 0.5s background linear;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    border: 1px solid black;
    color: #000;
    transition: 0.3s background linear;
  }
`;

export const OutlineButton = styled.button`
border-radius: 5px;
  padding: 10px 18px;
  width: 220px;
  border: 1px solid black;
  font-size: 16px;
  font-weight: 700;
  transition: 0.5s background linear;
color:black;
background-color:white;
&:hover {
    background-color:black;
    border: 1px solid black;
    color: white;
    transition: 0.3s background linear;
  }

`;