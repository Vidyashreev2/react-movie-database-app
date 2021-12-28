import styled from 'styled-components';

export const Wrapper = styled.div`
 background: var(--darkGrey);
 padding: 0 10px;
 `;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding:20px 0;
  margin:0 auto;
 `;
export const LogImg = styled.img`
 width:150px;
 @media screen and (max-width: 500px){
     width:150px;
 }
 `;
export const TMDBImg = styled.img`
 width:90px;
 @media screen and (max-width: 500px){
     width:80px
 }
 `;