import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ color }) => color || "rgb(80, 119, 130)"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  text-align: center;
  font-size: 18px;
  margin: 5px;
`;
