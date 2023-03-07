import styled from 'styled-components';

const StyledForm = styled.div`
    align-items: center;
    grid-template-columns: max-content;
    margin-bottom: 40px;
    width: 100%;
    height: 100%;

    img {
     width: 300px;
     align-items: center;
    }

    h2{
        text-align: center;
    }

    form{
        align-items: center;
        grid-auto-columns: max-content;
    }

    ul{
     list-style-type: none;
    }

    label{
        text-align: center;
        align-items: center;
    }
    
    input{
        text-align: left;
        align-items: center;
    }
`

export {StyledForm};