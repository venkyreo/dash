import { useState } from "react"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import Link from 'react-router-dom'
import { tokens } from "../../theme";
import { HomeOutlined, PeopleOutline, ContactMailOutlined, ReceiptOutlined, MenuOpenOutlined } from "@mui/icons-material";
const SideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [collapsed, setCollapsed] = useState(false);
    const [selected, setSelected] = useState('DashBoard')
    return (
        <Box sx={{
            "& .pro-sidebar-inner": {
                backgroundColor: `${colors.primary[400]} !important`
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important"
            },
            "& .pro-inner-item": {
                padding: '5px 35px 5px 20px'
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important"
            },
            "& .pro-memu-item.active": {
                color: '#6870fa !important'
            }
        }}>
            <Sidebar collapsed={collapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setCollapsed(!collapsed)}
                        icon={collapsed ? <MenuOpenOutlined /> : undefined}
                        style={{ margin: '10px 0 20px 0', color: colors.grey[400] }}>
                        {!collapsed &&
                            <Box display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                ml='15px'>
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINS
                                </Typography>
                                <IconButton onClick={() => setCollapsed(!collapsed)}>
                                    <MenuOpenOutlined/>
                                </IconButton>
                            </Box>}
                    </MenuItem>
                </Menu>
            </Sidebar>

        </Box>
    )
}

export default SideBar