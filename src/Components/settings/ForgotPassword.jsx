import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { Button,TextField } from '@mui/material';
import { Link } from 'react-router-dom';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

export default function ForgotPassword() {


    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [input, setInput] = React.useState({
        email: ''
        
      })

    
  


    return (
        <div>
            <div className="link">
            <Link onClick={handleOpen}>Forgotten Password?</Link>
            </div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                        <Typography id="modal-modal-title" variant="h6" gutterBottom sx={{ m:0,}}>
                            Sent OTP
                        </Typography>
                        <ClearIcon onClick={handleClose} sx={{ mt: 1, cursor: 'pointer' }} />
                    </Box>
                    <TextField
            name='email'
            value={input.email}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            sx={{ my: 1 }}
            label="Email or Phone Number"
            type='email'

            fullWidth
          />
                        <Button variant="contained" color='secondary' fullWidth sx={{ mt: 2 }} >
                            send
                        </Button>
                </Box>
            </Modal>
        </div>
    );
}
