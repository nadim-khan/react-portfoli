import React from 'react'
import {
    Avatar,
    Typography,
    Grid,
    Box
} from "@material-ui/core"
import Typed from 'react-typed';
import {makeStyles} from '@material-ui/core/styles';
import avatar from '../avatar.png'

// CSS Styles
const useStyle = makeStyles(theme=>({
    avatar:{
        width:theme.spacing(15),
        height:theme.spacing(15),
        margin:theme.spacing(1),
    },
    title:{
        color:"#61dafb",
    },
    subTitle:{
        color:"#b5dae4",
        marginBottom:"3rem"
    },
    typedContiner:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        width:'100vw',
        textAlign:'center',
        zIndex:1
    }
}))

const Header = () => {
    const classes = useStyle();
    return (
        <Box className={classes.typedContiner}>
            <Grid container justify="center">        
                <Avatar className={classes.avatar} src={avatar} alt="Nadeem Khan"/>
            </Grid>
            <Typography variant="h4" className={classes.title}>
                <Typed
                        strings={['Nadeem Khan']}
                        typeSpeed={40}
                    />
            </Typography>
            <Typography variant="h6" className={classes.subTitle} >
                <Typed
                        strings={['Web Design','Web Development','MEAN/MERN Stack']}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
            </Typography>
            
        </Box>
    )
}

export default Header
