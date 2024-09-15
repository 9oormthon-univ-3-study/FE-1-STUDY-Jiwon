import styled from "styled-components";

export const Content = styled.section`
  background-color: white;
  border-radius: 16px;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const None = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: rgb(245, 251, 251);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  transition: transform 0.2s ease-in-out;
  color: rgb(102, 102, 102);
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
