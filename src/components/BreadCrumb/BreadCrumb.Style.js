import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  color: white;
  background: var(--medGrey);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;
  span {
    font-size: var(--fontMed);
    color: white;
    padding-right: 10px;
    @media screen and(max-width:748px) {
      font-size: var(font-small);
    }
  }
`;
