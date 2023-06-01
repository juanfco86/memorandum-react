import data from '../data/sample.json'

const Series = () => {
    const showSeries = data.entries
        .filter(type => type.programType === 'series' && type.releaseYear >= 2010)
        .sort((a, b) => {
            const titleA = a.title.toUpperCase()
            const titleB = b.title.toUpperCase()

            if (titleA < titleB) return -1
            if (titleA > titleB) return 1
            return 0;
        })
        


    return (
        <>
            <h2>Popular Series</h2>
            {
                showSeries && showSeries.map((serie, index) => {
                    console.log(serie);
                    if (index < 20) {
                        return (
                            <>
                                <h6>{ serie.title }</h6>
                                <img src={ serie.images['Poster Art'].url } alt={ serie.title } />
                            </>
                        )
                    }
                })
            }
        </> 
    )
}

export default Series