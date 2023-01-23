import React, {useState} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';


function Dashboard() {


    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const showToastMessage = () => {
        toast.success('',{
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const history = useHistory()



    function handleSumbit(e) {
        e.preventDefault()
        console.log("hitted the button");
        console.log(email, description)
        const body = {
            email: email,
            description: description
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        // Request Body
        axios.post("http://localhost:3002/api/tickets", body, config)
            .then(function (response) {
                console.log(response);
                showToastMessage()
                setTimeout(() => {
                    window.location.reload(false);
                }, 1000)
               
            })

    }

    function login(e) {
        e.preventDefault()
        history.push('/login')
    }
          
    return(
        <> 
        <Box sx={{fontWeight: 'Bold', padding: '20px'}}>
         <Button variant="contained" color='success' sx={{fontWeight: 'Bold'}} onClick={e => login(e)}>View Tickets</Button>
        </Box>
          <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '10vh' }}
            >

                <Grid item xs={3}>
                    <Typography variant="h1" component="h2">
                        Create Tickets
                    </Typography>
                </Grid>
            </Grid>
           
            <Box sx={{marginTop: '30px',display: 'flex', justifyContent: 'center'}} component="form" noValidate autoComplete="off">
            <FormControl  sx={{border: '1px solid gray', paddingTop: '20px', paddingLeft: '50px', paddingBottom: '15px', paddingRight: '50px'}}>
    
            Email: <TextField fullWidth onChange={(newValue) => setEmail(newValue.target.value)}  label={'Please enter your Email'} id="email" margin="normal" />
            Description: <TextField fullWidth onChange={(newValue) => setDescription(newValue.target.value)} label={'Please enter your Password'} id="Password" margin="normal" />
           
            <Button onClick={e => handleSumbit(e)} variant="contained" color="success" sx={{marginTop: '15px', display: 'flex', justifyContent: 'center'}}>
                Submit
            </Button>
            <ToastContainer />
            </FormControl>
            </Box>
        </>
    )
}

export default Dashboard;
