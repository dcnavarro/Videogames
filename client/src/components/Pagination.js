


const Pagination = ({allVideogames, videogamesPerPage, pagination}) =>{
    let pageNumbers = [];
    for (let i=1 ; i<= Math.ceil(allVideogames/videogamesPerPage); i++) {
        pageNumbers.push(i)
    } 

    return (
        <nav>
            {
                pageNumbers && pageNumbers.map((number)=>{
                    return(
                    <button key={number} onClick={()=>pagination(number)}> {number} </button>
                    );
                })
            } 
            
        </nav>
    )
}

export {Pagination}
