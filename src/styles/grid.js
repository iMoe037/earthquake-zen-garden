import styled from "styled-components";

export const Container = styled.div`
  margin: 0 20vw;
  display: flex;
`;

export const Column = styled.div`
  flex: ${(props) => props.size};
`;
