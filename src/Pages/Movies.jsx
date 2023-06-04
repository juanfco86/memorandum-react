import { useDispatch, useSelector } from 'react-redux'
import { setMoviesList, setLoading, setError, setItemsPage } from '../redux/features/movies/moviesSlice';
import { useEffect, useState } from 'react';
import { fetchList } from '../API/getApi'
import ItemsPage from '../Components/Buttons/ItemsPage'
import BasicPagination from '../Components/Pagination/Pagination';
import InputFilter from '../Components/Inputs/InputFilter';
import BasicModal from '../Components/Modal/Modal';
import Button from '@mui/material/Button';

const Movies = () => {
    const moviesData = useSelector(state => state.moviesSlice)
    const dispatch = useDispatch();

    const [openId, setOpenId] = useState(null);
    const [year, setYear] = useState("2010")
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = moviesData.items
    const totalItems = moviesData.list.length
    const lastIndex = currentPage * itemsPerPage
    const firstIndex = lastIndex - itemsPerPage

    const defaultImg = 'https://res.cloudinary.com/dgquecmyz/image/upload/v1685896655/movie_vh8dzs.png'

    const handleOpen = (id) => {
        setOpenId(id.target.alt)
    };
    const handleClose = () => {
        setOpenId(null)
    };

    const yearFilter = (e) => {
        e.preventDefault();
        
        if (e.target[0].value === '') {
            setYear("2010")
            setCurrentPage(1)
        } else {
            setYear(e.target[0].value)
            setCurrentPage(1)
        }
    }

    useEffect(() => {
        fetchList(dispatch, setMoviesList, setLoading, setError, 'movie', year);
    }, [year, dispatch]);

    return (
        <>
            <h2>Popular movies</h2>
            <div className='container--top__options'>
                <InputFilter yearFilter={ yearFilter } />
                <ItemsPage dispatch={ dispatch } setItemsPage={ setItemsPage } setCurrentPage={ setCurrentPage } />
            </div>
            <div className='container'>
                {
                    moviesData.loading ? <p>Loading...</p> : moviesData.error ? <p>Oops, something went wrong...</p> : moviesData.list.map((movie) => {
                            return (
                                <Button onClick={ handleOpen } key={ movie.title }>
                                    <div className='card--container'>
                                        <img src={ movie.images['Poster Art'].url } onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = defaultImg
                                        }} alt={ movie.title } />
                                        <h6 className='h6--style'>{ movie.title }</h6>
                                    </div>
                                    <BasicModal title={ movie.title } description={ movie.description } img={ movie.images['Poster Art'].url } defaultImg={ defaultImg } year={ movie.releaseYear } open={ openId === movie.title } handleClose={ handleClose } />
                                </Button>
                            )
                    }).slice(firstIndex, lastIndex)
                }
            </div> 
            <div className='container--pagination'>
                <BasicPagination totalItems={totalItems} itemsPerPage={itemsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </>
    )
}

export default Movies