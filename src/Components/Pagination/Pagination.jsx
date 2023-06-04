import Pagination from '@mui/material/Pagination';

export default function BasicPagination({totalItems, itemsPerPage, currentPage, setCurrentPage}) {
    const totalPages = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        totalPages.push(i)
    }

    const handleChange = (event, value) => {
        setCurrentPage(value)
    }

    return (
            <Pagination count={totalPages.length} color="primary" page={currentPage} onChange={handleChange} />
    );
}