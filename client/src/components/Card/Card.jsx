
import { StyledCard } from "../Styles/StyledCard.styled";

const Card = (props)=>{
    return(
        <StyledCard>
            <div>
            <img src={props.image} alt="Not found" width='350px' height='200px' />
            </div>
            <h3>{props.name}</h3>
            <h4>{props.genres}</h4>
        </StyledCard>
        )
};

export {Card}