import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton 
} from "@material-ui/core"
import ShareIcon from '@material-ui/icons/Share';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import project1 from '../../images/html-css-javascript-lg.jpg';
import project2 from '../../images/html-css-javascript.jpg'
import project3 from '../../images/javascript-fullstack.jpg'
import project4 from '../../images/mern-stack.jpg'
import project5 from '../../images/react-redux.jpg'
import project6 from '../../images/react.png'
import Navbar from '../Navbar';
// CSS Styles
const useStyle = makeStyles(theme=>({
    mainContainer:{
        background:'#222',
        height:'100%'
    },
    cardContainer:{
        maxWidth:345,
        margin:'5rem auto'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
}));

 const projects =[
     {
         name:'HTML CSS JS',
         description:'BASIC Frontend Development',
         imageUrl:`${project1}`,
         isDeployed:false
     },
     {
        name:'HTML CSS JS Basics',
        description:'Desc1',
        imageUrl:`${project2}`,
        isDeployed:false
    },
    {
        name:'JS Full Stack',
        description:'Desc1',
        imageUrl:`${project3}`,
        isDeployed:false
    },
    {
        name:'MERN App',
        description:'Desc1',
        imageUrl:`${project4}`,
        isDeployed:true
    },
    {
        name:'React Redux',
        description:'Desc1',
        imageUrl:`${project5}`,
        isDeployed:true
    },
    {
        name:'React Concepts',
        description:'Desc1',
        imageUrl:`${project6}`,
        isDeployed:false
    },
 ]

const Portfolio = () => {
    const classes = useStyle()
    return (
        <>
            <Box component='div' className={classes.mainContainer}>
                <Navbar/>
                <Grid container justify="center" >
                    {projects.map((project,index)=>
                        <Grid item  key={index} xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                                <CardMedia component='img' alt='Project 1' height='180' image={project.imageUrl} >
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        {project.name}
                                    </Typography>
                                    <Typography variant="h5" color="textSecondary" component="p">
                                    {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton aria-label="share" size="small" color="primary">
                                        <ShareIcon />
                                    </IconButton>
                                    {project.isDeployed ? <IconButton aria-label="Live Demo" size="medium" color="secondary">
                                        <ScreenShareIcon />
                                    </IconButton> : 
                                    <></>
                                    }
                                </CardActions>
                        </Card>
                    </Grid>
                    )}
                </Grid>
            </Box>
        </>
    )
}

export default Portfolio
