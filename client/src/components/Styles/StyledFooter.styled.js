import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: ${({theme})=>theme.colors.footer};
    color: #272525;
    padding: 60px 0 20px;
    margin-top: 20px;

    ul{
        list-style-type: none;
    }

    ul li{
        margin-bottom: 5px;
    }

    p{
        text-align: right;
    }
    
`

export {StyledFooter};
