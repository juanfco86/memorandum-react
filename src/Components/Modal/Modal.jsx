import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid white',
    boxShadow: 24,
    p: 4,
    
};

export default function BasicModal({ title, description, img, defaultImg, year, open, handleClose  }) {
    const [modalImg, setModalImg] = React.useState(img)

    const handleImgError = () => {
        setModalImg(defaultImg)
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                    
                <Box sx={ style }>
                    <img className='modal--img' src={ modalImg } alt={ title } onError={ handleImgError } />
                    <div>
                        <Typography id="modal-modal-title" variant="h5" component="h3">
                            { title }
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            { description }
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            Year: { year }
                        </Typography>
                    </div>
                </Box>
            </Modal>
        </>
    );
}