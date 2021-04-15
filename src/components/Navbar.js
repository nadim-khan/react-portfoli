import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer  from '@material-ui/core/SwipeableDrawer';

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
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"
import avatar from "../avatar.png"
import Footer from './Footer';

// CSS STYLES
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: '100vw',
        background: "black",
        height: "100%",
        // borderLeft:'2px solid #b5dae4'
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    list:{

    },
    listItem: {
        color: "#b5dae4"
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
    // {
    //     listIcon: <ContactMail/>,
    //     listText: "Projects",
    //     listPath:'/projects'
    // },
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
            <Avatar className={classes.avatar} src={avatar} alt="Glenn Java" />
            <Divider/>
            <List className={classes.list}>
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
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{color: "#61dafb"}}/>                    
                        </IconButton>
                        <Typography variant="h5" style={{color:"#7fc8db"}}>Portfolio</Typography>
                        <SwipeableDrawer anchor="left" open={state.right}  onOpen={toggleSlider("right", true)} onClose={toggleSlider("right", false)}>
                            {sideList("right")}
                            <Footer/>
                        </SwipeableDrawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </>

    )
};

export default Navbar