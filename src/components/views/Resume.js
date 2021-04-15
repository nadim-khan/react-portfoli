import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {
    Typography,
    Box,
    Fab
} from "@material-ui/core"
import Navbar from '../Navbar';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
// CSS Styles
const useStyle = makeStyles(theme=>({
    mainContainer:{
        background:'#222',
        paddingBottom:'2.75rem'
    },
    download:{
        bottom:'1.75rem',
        position:'fixed',
        left:'1rem',
        right:'1rem',
        width:'calc(100% - 2rem)',
        background:'#61dafb',
        fontSize:'1.2rem',
        '&:hover':{
            background:'#61dafb'
        }
    },
    timeLine:{
        position:'relative',
        padding:'1rem',
        margin:'0 auto',
        "&:before":{
            content:"''",
            position:'absolute',
            height:'100%',
            border:'1px solid #61dafb',
            right:'40px',
            top:0
        },
        "&:after":{
            content:"''",
            display:'table',
            clear:'both'
        },
        [theme.breakpoints.up("md")]:{
            padding:'2rem',
            "&:before":{
                left:"calc(50% - 1px)",
                right:'auto'
            }
        }
    },
    timelineItem:{
        padding:'1rem',
        borderBottom:"2px solid #61dafb ",
        position:'relative',
        margin:'1rem 3rem 12rem 1rem',
        clear:'both',
        '&:after':{
            content:"''",
            position:'absolute'
        },
        '&:before':{
            content:"''",
            position:'absolute',
            right:'-0.625rem',
            top:'calc(50% - 5px)',
            borderStyle:'solid',
            borderColor:'#61dafb #61dafb transparent transparent',
            borderWidth:'0.625rem',
            transform:"rotate(45deg)"
        },
        [theme.breakpoints.up("md")]:{
            width:'44%',
            margin:'1rem',
            '&:nth-of-type(2n)':{
                float:'right',
                margin:'1rem',
                borderColor:'#b5dae4'
            },
            '&:nth-of-type(2n):before':{
                right:'auto',
                left:'-0.625rem',
                borderColor:'transparent transparent #61dafb #61dafb ',
            }
        }

    },
    timelineYear:{
        textAlign:'center',
        maxWidth:'9.375rem',
        margin:'0 3rem 0 auto',
        fontSize:'1.8rem',
        background:'#61dafb',
        boxShadow: '0 3px #b5dae4',
        color:'#fff',
        lineHeight:1,
        padding:'0.8rem 0 1rem ',
        '&:before':{
            display:'none'
        },
        [theme.breakpoints.up("md")]:{
            textAlign:'center',
            margin:'0 auto',
            '&:nth-of-type(2n)':{
                float:'none',
                margin:'0 auto'
            },
            '&:nth-of-type(2n):before':{
                diplay:'none'
            },

        }
    },
    heading:{
        color:'#61dafb',
        padding:'3rem 0',
        textTransform:'uppercase'
    },
    subHeading:{
        color:'#fff',
        padding:'0',
        textTransform:'uppercase'

    }
    
}))

const ExpDetails = [
    {
        year:'2016',
        designation:'Software Engineer',
        company:'Tech Mahindra',
        techStack:'Angular 2+, HTML, CSS, JS',
        duration:'26 July 2016 - 20 Feb 2019'
    },
    {
        year:'2019',
        designation:'Senior Software Developer',
        company:'Iasys Technologie (Pune)',
        techStack:'Angular 2+, HTML, CSS, JS',
        duration:'25 Feb 2016 - 15 March 2020'
    },
    {
        year:'2020',
        designation:'Senior Software Developer',
        company:'VComply Technologie PVT LTD',
        techStack:'Angular 6+, Angular JS, Webix JS, HTML, CSS, JS',
        duration:'04 June 2020 - 18 Sept 2020'
    },
    {
        year:'2021',
        designation:'Senior Software Developer',
        company:'Tech Mahindra',
        techStack:'Vue JS, React JS, HTML, CSS, JS',
        duration:'15 Dec 2020 - Present Date'
    },
]

const Resume = () => {
    const classes = useStyle()
    return (
        <Box component="header" className={classes.mainContainer}>
            <Navbar/>
            <Typography variant="h4" align="center" className={classes.heading}>
                Working Experience
            </Typography>
            
            <Box component="div" className={classes.timeLine}>
                {ExpDetails.map((exp,index)=>
                    <React.Fragment key={index}>
                        <Typography variant="h2" className={`${classes.timelineYear} ${classes.timelineItem} `} >
                        {exp.year}
                        </Typography>
                        <Box component="div" className={classes.timelineItem}>
                            <Typography variant="h5"  className={classes.subHeading}>
                                {exp.designation}
                            </Typography>
                            <Typography variant="body1" style={{color:'#61dafb'}}>
                            {exp.company}
                            </Typography>
                            <Typography variant="subtitle1" style={{color:'#b5dae4'}}>
                                Technology Stack : {exp.techStack}
                            </Typography>
                            <Typography variant="subtitle2" style={{color:'#b5dae4'}}>
                                Duration : {exp.duration}
                            </Typography>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
            <Fab variant="extended" className={classes.download} >
                <CloudDownloadIcon  style={{marginRight:'1rem',width:'1.8rem',fill:'#fff'}}/>
                    Download Resume
            </Fab>
        </Box>

    )
}

export default Resume
