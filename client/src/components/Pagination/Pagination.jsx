
const Pagination = ({allVideogames, videogamesPerPage, pagination, currentPage}) =>{
    let pageNumbers = [];
    for (let i=1 ; i<= Math.ceil(allVideogames/videogamesPerPage); i++) {
        pageNumbers.push(i)
    } 

    return (
        <div>
        <nav>
            {
                pageNumbers && pageNumbers.map((number)=>{
                    return(
                    <button key={number} onClick={()=>pagination(number)} className={number === currentPage ? 'active' : '' }> {number} </button>
                    );
                })
            } 
            
        </nav>
        </div>
    )
}

export {Pagination}
