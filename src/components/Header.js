import React from 'react'
import {
    Avatar,
    Typography,
    grid,
    Box
} from "@material-ui/core"
import avatar from '../avatar.png'
const Header = () => {
    return (
        <Box>
            <Avatar src={avatar} alt="Nadeem Khan"/>
        </Box>
    )
}

export default Header
