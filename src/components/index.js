import React from 'react'
import Header from './Header'
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';

// CSS STYLES
const useStyles = makeStyles(theme=>({
    particlesCanvas:{
        position:'absolute',
        opacity:'0.3',
    }

}));

const Home = () => {
    const classes = useStyles()
    return (
        <div>
            <Navbar/>
            <Header/>
            <Particles 
                canvasClassName={classes.particlesCanvas}
                height='90vh'
                params={{
                    particles: {
                        number:{
                            value:45,
                            density:{
                                enable:true,
                                value_area:800
                            }
                        },
                        shape:{
                            type:'circle',
                            stroke:{
                                width:6,
                                color:'#61dafb'
                            }
                        },
                        size:{
                            value:8,
                            random:true,
                            anim:{
                                enable:true,
                                speed:8,
                                size_min:0.1,
                                sync:true
                            }
                        },
                        opacity:{
                            value:1,
                            random:true,
                            anim:{
                                enable:true,
                                speed:1,
                                opacity_min:0.1,
                                sync:true
                            }
                        }
                    }
                }} />
        </div>
    )
}

export default Home
