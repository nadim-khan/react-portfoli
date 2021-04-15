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
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
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
         name:'Gymnasium',
         description:'App for Gym created Using Angular 8, Mongo ,Node,ExpressJS',
         imageUrl:`${project1}`,
         gitUrl:'https://github.com/nadim-khan/Gymnasium',
         appUrl:'https://trainmenow.herokuapp.com/',
         isDeployed:true
     },
    {
        name:'MERN App',
        description:'Portfolio',
        imageUrl:`${project4}`,
        gitUrl:'https://github.com/nadim-khan/react-portfoli',
        appUrl:'https://nadsontech.herokuapp.com/',
        isDeployed:true
    },
    {
        name:'File Share App',
        description:'File Sharing platform -created Using React ,Node,Mongo and Express js',
        imageUrl:`${project4}`,
        gitUrl:'',
        appUrl:'https://tosharefile.herokuapp.com/',
        isDeployed:true
    },
    {
        name:'React Concepts',
        description:'All the react concepts from Basics to advance',
        imageUrl:`${project5}`,
        gitUrl:'https://github.com/nadim-khan/reactBasics',
        appUrl:'',
        isDeployed:false
    },
 ]

 function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }

const Portfolio = () => {
    const classes = useStyle();
    const [snackOpen, setSnackOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);
  
    const handleClick = (Transition) => () => {
      setTransition(() => Transition);
      navigator.clipboard.writeText(transition)
      setSnackOpen(true);
    };
  
    const handleClose = () => {
        setSnackOpen(false);
    };
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
                                        <ShareIcon onClick={handleClick(TransitionUp)} />
                                    </IconButton>
                                    {project.isDeployed ? <IconButton aria-label="Live Demo" size="medium" color="secondary" onClick={()=> window.open(`${project.appUrl}`, "_blank")}>
                                        <ScreenShareIcon />
                                    </IconButton> : 
                                    <></>
                                    }
                                </CardActions>
                                <Snackbar
                                    open={snackOpen}
                                    onClose={handleClose}
                                    TransitionComponent={transition}
                                    message="Link Copied"
                                    autoHideDuration={6000}
                                    key={transition ? transition.name : ''}
                                />
                        </Card>
                    </Grid>
                    )}
                </Grid>
            </Box>
        </>
    )
}

export default Portfolio
