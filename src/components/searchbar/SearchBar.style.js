import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
align-items: center;
padding:0 15px;
height:80px;
background: var(--darkGrey);
`;
export const Content = styled.div`
position: relative;
max-width: var(--maxWidth)
margin:0 auto;
border-radius:40px;
width:100%;
height:40px;
background: var(--medGrey);
color: var(--white);

img{
    position:absolute;
    left:20px;
    top:10px;
    width:23px;
}
input{
    font-size:22px;
    position:absolute;
    padding: 0 0 0 67px;
    margin: 6px 0;
    background: transparent;
    color: var(--white);
    width:70%;
    height: 30px;
    border: 0;

    :focus {
        outline: none;
    }
}

`;