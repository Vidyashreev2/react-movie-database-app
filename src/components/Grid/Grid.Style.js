import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: vae(--maxWidth);
  padding: 0 20px;
  margin: 0 auto;
  h1 {
    color: var(--midGrey);
    @media screen and(max-width:780px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
