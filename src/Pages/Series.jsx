import { useDispatch, useSelector } from 'react-redux'
import { setSeriesList, setLoading, setError, setItemsPage } from '../redux/features/series/seriesSlice';
import { useEffect, useState } from 'react';
import { fetchList } from '../API/getApi'
import ItemsPage from '../Components/Buttons/ItemsPage'
import BasicPagination from '../Components/Pagination/Pagination';
import InputFilter from '../Components/Inputs/InputFilter';
import BasicModal from '../Components/Modal/Modal';
import Button from '@mui/material/Button';

const Series = () => {
    const seriesData = useSelector(state => state.seriesSlice)
    const dispatch = useDispatch();

    const [openId, setOpenId] = useState(null);
    const [year, setYear] = useState("2010")
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = seriesData.items
    const totalItems = seriesData.list.length
    const lastIndex = currentPage * itemsPerPage
    const firstIndex = lastIndex - itemsPerPage

    const defaultImg = 'https://res.cloudinary.com/dgquecmyz/image/upload/v1685896655/serie_mrw4q5.png'

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
        fetchList(dispatch, setSeriesList, setLoading, setError, 'series', year);
    }, [year, dispatch]);

    return (
        <>
            <h2>Popular Series</h2>
            <div className='container--top__options'>
                <InputFilter yearFilter={ yearFilter } />
                <ItemsPage dispatch={ dispatch } setItemsPage={ setItemsPage } setCurrentPage={ setCurrentPage } />
            </div>
            <div className='container'>
                {
                    seriesData.loading ? <p>Loading...</p> : seriesData.error ? <p>Oops, something went wrong...</p> : seriesData.list.map((serie) => {
                            return (
                                <Button onClick={ handleOpen } key={ serie.title }>
                                    <div className='card--container'>
                                        <img src={ serie.images['Poster Art'].url } onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = defaultImg
                                        }} alt={ serie.title } />
                                        <h6 className='h6--style'>{ serie.title }</h6>
                                    </div>
                                    <BasicModal title={ serie.title } description={ serie.description } img={ serie.images['Poster Art'].url } defaultImg={ defaultImg } year={ serie.releaseYear } open={ openId === serie.title } handleClose={ handleClose } />
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

export default Series