import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  height: 60px;
  padding: 20px;
  width: 104px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  background-color: ${(props) => (props.$isSelected ? "rgb(80, 119, 130)" : "rgb(220, 235, 235)")};
  color: ${(props) => (props.$isSelected ? "#fff" : "#000")};

  &:hover {
    background-color: ${(props) => (props.$isSelected ? "rgb(70, 109, 120)" : "rgb(200, 215, 215)")};
  }
`;
