import styled from 'styled-components';

const StyledCard = styled.div`
    display: flex;
    align-items: center;
    background-color: gray;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    margin: 40px;
    padding: 60px;

& > div{
    flex:1;
}
`

export {StyledCard};