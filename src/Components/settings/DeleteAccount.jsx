import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import { Button, TextField } from '@mui/material';


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

export default function DeleteModal() {

    const navigate = useNavigate();
    const [input, setInput]=React.useState({
        password:''
    })
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleConfirm =()=>{
        const handlepassword=JSON.parse(localStorage.getItem('user'))
        if(input.password==handlepassword.password){
            localStorage.clear();
            navigate('/login')
            setInput('')
        }else{
            alert("Enter valid password")
        }
    }

    return (
        <div>
            <div className="link">
                <li onClick={handleOpen}> Delete your Account </li>
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
                        <Typography id="modal-modal-title" variant="h6" gutterBottom sx={{ m: 0, }}>
                            Enter your  password
                        </Typography>
                        <ClearIcon onClick={handleClose} sx={{ mt: 1, cursor: 'pointer' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <TextField
                            name='password'
                            value={input.password}
                            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                            sx={{ my: 1 }}
                            label="password"
                            type='password'
                            fullWidth
                        />
                        <Button variant="contained" color='secondary' fullWidth sx={{ mt: 2 }} onClick={handleConfirm}  >
                            Confirm
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
