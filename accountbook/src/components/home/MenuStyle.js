import styled from "styled-components";

export const Menu = styled.section`
  background-color: white;
  border-radius: 16px;
  padding: 20px;
`;

export const Container = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
`;

export const Button = styled.button`
  padding: 8px 20px;
  height: 34px;
  margin-top: 10px;
  background-color: rgb(80, 119, 130);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
`;
