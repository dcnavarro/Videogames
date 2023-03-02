import style from '../Card/Card.module.css';


const Card = (props)=>{
    return(
            <div className={style.card}>
            <img src={props.image} alt="Not found" width='350px' height='200px' />
            <h3>{props.name}</h3>
            <h4>{props.genres}</h4>
        </div>
        )
};

export {Card}