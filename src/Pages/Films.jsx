import data from '../data/sample.json'

const Films = () => {
    const showMovies = data.entries
        .filter(type => type.programType === 'movie' && type.releaseYear >= 2010)
        .sort((a, b) => {
            const titleA = a.title.toUpperCase()
            const titleB = b.title.toUpperCase()

            if (titleA < titleB) return -1
            if (titleA > titleB) return 1
            return 0;
        })
        


    return (
        <>
            <h2>Popular Movies</h2>
            {
                showMovies && showMovies.map((movie, index) => {
                    if (index < 20) {
                        return (
                            <>
                                <h6>{ movie.title }</h6>
                                <img src={ movie.images['Poster Art'].url } alt={ movie.title } />
                            </>
                        )
                    }
                })
            }
        </> 
    )
}


export default Films