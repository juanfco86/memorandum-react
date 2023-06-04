import data from '../data/sample.json'

export const fetchList = async (dispatch, slice, setLoading, setError, serieOrMovie, year) => {
    const showSerieOrMovie = data.entries
        .filter(type => type.programType === serieOrMovie && type.releaseYear >= year)
        .sort((a, b) => {
            const titleA = a.title.toUpperCase()
            const titleB = b.title.toUpperCase()
            
            if (titleA < titleB) return -1
            if (titleA > titleB) return 1
            return 0;
        })
    
        dispatch(slice(showSerieOrMovie))

        try {
            await Promise.all(showSerieOrMovie)
        } catch (error) {
            dispatch(setError(true))
        } finally {
            dispatch(setLoading(false))
        }
}