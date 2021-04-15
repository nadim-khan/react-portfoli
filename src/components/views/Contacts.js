import React from 'react'
import {makeStyles,withStyles} from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Grid,
    Button,
    TextField
} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import Navbar from '../Navbar';

const useStyles=makeStyles(theme=>({
    form:{
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -50%)',
        position:'absolute'
    },
    button:{
        marginTop:'1rem',
        color:'#61dafb',
        borderColor:'#61dafb'
    },
    heading:{
        color:'#61dafb',
        textAlign:"center",
        textTransform:'uppercase'
    }
}))
const InputField = withStyles({
    root:{
        '& label.Mui-focused':{
            color:'#61dafb',
        },
        '& label':{
            color:"#fff"
        },
        '& .MuiOutlinedInput-root':{
            '& fieldset':{
                borderColor:'#b5dae4'
            },
            '&:hover fieldset':{
                borderColor:'#b5dae4'
            },
            '&.Mui-focused fieldset':{
                color:'#b5dae4'
            },
            '& .MuiOutlinedInput-notchedOutline':{
                borderColor:'#b5dae4'
            }
        }
    }
})(TextField)

const Contacts = () => {
    const classes = useStyles();
    return (
        <Box component="div" style={{background:'#222',height:'100vh'}}>
            <Navbar/>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography className={classes.heading} variant="h5">
                        Contact Me ...
                    </Typography>
                    <InputField 
                        fullWidth={true}
                        label="Name"
                        InputProps={{style:{color:"#fff"}}}
                        variant="outlined"
                        margin="dense"
                        size="medium" />
                    <InputField 
                        fullWidth={true}
                        label="Email"
                        InputProps={{style:{color:"#fff"}}}
                        variant="outlined"
                        margin="dense"
                        size="medium" />
                    <InputField 
                        fullWidth={true}
                        label="Company Name"
                        InputProps={{style:{color:"#fff"}}}
                        variant="outlined"
                        margin="dense"
                        size="medium" />
                    <InputField 
                        fullWidth={true}
                        label="Descriptions"
                        InputProps={{style:{color:"#fff"}}}
                        variant="outlined"
                        margin="dense"
                        size="medium" />
                    <br/>

                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>Send</Button>
                    
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts
