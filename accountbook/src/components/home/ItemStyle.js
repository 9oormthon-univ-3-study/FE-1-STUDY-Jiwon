import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: rgb(245, 251, 251);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.span`
  margin-bottom: 5px;
  color: rgb(102, 102, 102);
  font-size: 14px;
`;

export const Title = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  font-weight: bold;
  color: rgb(80, 119, 130);
  flex-shrink: 0;
  font-size: 16px;
`;

export const Amount = styled.span`
  font-weight: bold;
  color: rgb(80, 119, 130);
  flex-shrink: 0;
  font-size: 16px;
`;
