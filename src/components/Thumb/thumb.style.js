import styled from 'styled-components';

export const Image = styled.img`
width: 100%;
transition: all 0.3s;
border-radius:20px;
max-width:342px;
object-fit:cover
animation: animateThumb 0.5s;
:hover{
    opacity:0.8;
}
@keyFrame animateThumb{
    from{
        opacity:0
    }
    to{
        opacity:1;
    }

}
`;