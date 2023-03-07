import styled from 'styled-components';

export const StyledHeader = styled.header`
background-color: ${({theme})=> theme.colors.header};
padding: 5px 0px;
margin-bottom: 10px;

h1{
    font-family: monospace;
    font-size: 60px;
}

h3{
    justify-content: left;
    flex-wrap: wrap;
    
}

&:hover{
    background-color: #857f7f;
}

& > div {
    flex: 1;
}
`
export const HeaderImage = styled.img`
    width: 300px;
    margin-left: 40px;
`