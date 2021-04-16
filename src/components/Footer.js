import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {
    BottomNavigation,
    BottomNavigationAction 
} from "@material-ui/core"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CallIcon from '@material-ui/icons/Call';

const useStyles=makeStyles(theme=>({
    root:{
        '& .MuiBottomNavigationAction-root':{
            minWidth:0,
            maxWidth:250,
            
        },
        '& .MuiSvgIcon-root':{
            paddingTop:'0.3rem',
            fill:'#b5dae4',
            fontSize:'1.8rem',
            '&:hover':{
                fill:'#61dafb',
                fontSize:'1.9rem',
                
            }
        }
    }
}));

const Footer = () => {
    const classes = useStyles();
    const [value, setValue] = useState('recents');
    const makeCall = () => {
        const callNode = document.getElementById('call');
        var buttonEl = document.createElement("a");
	    buttonEl.href = 'tel:+91-7024019995';
        callNode.appendChild(buttonEl);
        buttonEl.click();
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch(newValue){
            case 0 : {
                window.open('https://www.facebook.com/nadim.khan.5811/');
                break;
            }
            case 1 :{
                window.open('https://twitter.com/NadeemK64992940')
                break;
            }
            case 2 :{
                window.open('https://www.instagram.com/iam_noddy/')
                break;
            }
            case 3 :{
                window.open('https://github.com/nadim-khan')
                break;
            }
            case 4 :{
                window.open('https://in.linkedin.com/in/nadeemkhan5811')
                break;
            }
            default:{}  
        }

    };
    return (
        <>
        <BottomNavigation id="call" value={value} onChange={makeCall} className={classes.root} width="auto" style={{background:'#32CD32'}}>
            <BottomNavigationAction label="Call" style={{padding:0}} icon={<CallIcon/>}/>
        </BottomNavigation>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root} width="auto" style={{background:'#222'}}>
            <BottomNavigationAction label="Facebook" style={{padding:0}} icon={<FacebookIcon/>}/>
            <BottomNavigationAction label="Twitter" style={{padding:0}} icon={<TwitterIcon/>}/>
            <BottomNavigationAction label="Instagram" style={{padding:0}} icon={<InstagramIcon/>}/>
            <BottomNavigationAction label="Github" style={{padding:0}} icon={<GitHubIcon/>}/>
            <BottomNavigationAction label="Linkedin" style={{padding:0}} icon={<LinkedInIcon/>}/>
        </BottomNavigation>
        </>
    )
}

export default Footer
