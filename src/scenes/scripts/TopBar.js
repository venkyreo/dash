import { useTheme, Box, IconButton, InputBase } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import SearchIcon from '@mui/icons-material/Search';
// import { LightModeOutlinedIcon, DarkModeOutlinedIcon, NotificationsOutlinedIcon, SettingsOutlinedIcon } from "@mui/icons-material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { NotificationAddSharp, Person2Outlined, SettingsOutlined } from "@mui/icons-material";
// import LightModeIcon from '@mui/icons-material/LightMode';
// import LightModeIcon from '@mui/icons-material/LightMode';

const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <Box display='flex' justifyContent='start'>
            <Box display='flex'
                borderRadius='3px'
                backgroundColor={colors.primary[400]}>
            </Box>
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="search" />
            <IconButton type="button" sx={{ p: 1 }}>
                <SearchIcon />
            </IconButton>
            <Box display='flex'>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (<DarkModeIcon />) : (<LightModeIcon />)}
                </IconButton>
                <IconButton>
                    <NotificationAddSharp />
                </IconButton>
                <IconButton>
                    <SettingsOutlined />
                </IconButton>
                <IconButton>
                    <Person2Outlined />
                </IconButton>
            </Box>
        </Box>

    )
}

export default TopBar
