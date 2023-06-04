import { Button, ButtonGroup } from "@mui/material"

const ItemsPage = ({ dispatch, setItemsPage, setCurrentPage }) => {
    const itemsQuantity = (quantity) => {
        setCurrentPage(1)
        dispatch(setItemsPage(quantity))
    }

    return (
        <>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={ () => itemsQuantity(5) }>5</Button>
                <Button onClick={ () => itemsQuantity(10) }>10</Button>
                <Button onClick={ () => itemsQuantity(20) }>20</Button>
            </ButtonGroup>
        </>
    )
}

export default ItemsPage