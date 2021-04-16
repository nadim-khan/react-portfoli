import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core"
import {
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"
import avatar from "../avatar.png"
import logo from "../logo.png"
import Footer from './Footer';

// CSS STYLES
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "black",
        height: "100%",
        justifyContent:"center"
    },
    logo:{
        display: "block",
        margin: " auto 0.5rem",
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: "#b5dae4"
    },
    rightSideButton:{

    }

}));

// Icons

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath:'/portfolio'
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath:'/contact'
    }
]


const Navbar = () => {
    const [state, setState] = useState({
        right: false
 })

const toggleSlider = (slider, open) => () => {
    setState({...state, [slider]: open});
}

    const classes = useStyles()

    const sideList = slider => (

        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider,false)}>
            <Avatar className={classes.avatar} src={avatar} component={Link} to="/" alt="Nadeem Khan" />
            <Divider/>
            <List>
                {menuItems.map((listItem, key) => (
                    <ListItem button key={key} component={Link} to={listItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {listItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={listItem.listText} />
                    </ListItem>
                ))} 
            </List>

        </Box> 
    )
    return (
        <>
            <Box component="nav">
                <AppBar position ="static" style={{background: "#222"}}>
                    <Toolbar>
                        <Avatar className={classes.logo} src={logo} alt="Nadeem Khan" />
                        <Typography variant="h5" style={{color:"#7fc8db",flex:1}}></Typography>
                        <MobileRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right", false)}>
                            {sideList("right")}
                            <Footer/>
                        </MobileRightMenuSlider>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <MenuOpenIcon style={{color: "#61dafb"}}/>                    
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </>

    )
};

export default Navbar