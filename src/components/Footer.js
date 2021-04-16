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
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles=makeStyles(theme=>({
    root:{
        '& .MuiBottomNavigationAction-root':{
            minWidth:0,
            maxWidth:250,
            borderRadius:'3px'
        },
        '& .MuiSvgIcon-root':{
            paddingTop:'0.5rem',
            fill:'#fff',
            fontSize:'1.8rem',
            '&:hover':{
                fill:'#61dafb',
                fontSize:'2.3rem',
                
            }
        }
    }
}));

const Footer = () => {
    const classes = useStyles();
    const [value, setValue] = useState('recents');
    const makeContact = (event, newValue) => {
        const callNode = document.getElementById('call');
        const buttonEl = document.createElement("a");
        switch(newValue){
            case 0 : {
                buttonEl.href = 'tel:+91-7024019995';
                callNode.appendChild(buttonEl);
                buttonEl.click();
                break;
            }
            case 1 :{
                buttonEl.href = 'https://wa.me/7024019995/?text=urlencodedtext';
                callNode.appendChild(buttonEl);
                buttonEl.click();
                break;
            }
            default:{}  
        }
        
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
        <BottomNavigation id="call" value={value} onChange={makeContact} className={classes.root} width="auto" style={{background:'#000'}}>
            <BottomNavigationAction label="Call" style={{padding:0,background:'#01e675'}} icon={<CallIcon/>}/>
            <BottomNavigationAction label="Whatsapp" style={{padding:0 ,background:'#1ebea5' }} icon={<WhatsAppIcon/>}/>
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
