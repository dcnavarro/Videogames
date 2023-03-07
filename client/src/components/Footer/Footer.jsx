import { Container } from "../Styles/Container.styled";
import {Flex} from '../Styles/Flex.styled';
import { StyledFooter } from "../Styles/StyledFooter.styled";

const Footer = ()=>{
return(
    <StyledFooter>
    <Container>

    
    <Flex>
        <ul>
            <li>
                Lorem ipsum dolor sit amet. Qui quibusdam dolores ut dolorem praesentium rem voluptatem deleniti qui possimus quos qui libero Quis. 
            </li>
            <li>
                +1-202-555-0192
            </li>
            <li>
                example@mail.com
            </li>
        </ul>
        <ul>
            <li>About us</li>
            <li>What do we do</li>
            <li>FAQ</li>
        </ul>
        <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
        </ul>

    </Flex>
    <p>&copy; 2023 GamerCloud. All rights reserved.</p>
    </Container>
    </StyledFooter>
)};

export {Footer};