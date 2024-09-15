import styled from "styled-components";

export const Container = styled.div``;

export const Graph = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  height: 40px;
  background-color: rgb(233, 236, 239);
  border-radius: 8px;
  overflow: hidden;
  flex-direction: row;
`;

export const Item = styled.div`
  height: 40px;
  flex-grow: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Color = styled.div`
  width: 20px;
  height: 10px;
  margin-right: 8px;
`;

export const Text = styled.span`
  align-items: center;
  font-size: 14px;
  color: rgb(85, 85, 85);
`;
