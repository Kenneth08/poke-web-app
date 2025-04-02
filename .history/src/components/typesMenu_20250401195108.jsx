import { useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    useMediaQuery,
    useTheme,

} from "@mui/material";
import {typeColors} from '../materialStyles';
import MenuIcon from '@mui/icons-material/Menu';

export default function ResponsiveTypeMenu(props) {
    const { types } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    if (!types) return null;

    return (
        <Box>
            {isMobile ? (
                <>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        label="Types"
                        onClick={handleMenuOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="types-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        sx={{backgroundColor:'#D2D4C8'}}
                    >
                        {types.results.map(type => (
                            <MenuItem
                                key={type.name}
                                onClick={handleMenuClose}
                                sx={{
                                    '&:hover': {
                                      backgroundColor: typeColors[type.name] || '#A8A878',
                                      color: '#FFFFFF',
                                    }
                                  }}
                            >
                                {type.name}
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            ) : (
                <Box>
                    {types.results.map(type => (
                        <Button sx={{
                            backgroundColor: '#D2D4C8',
                            color: '#2E3532',
                            m: 1,
                            '&:hover': {
                              backgroundColor: typeColors[type.name] || '#A8A878',
                              color: '#FFFFFF', 
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
                            },
                            transition: 'all 0.3s ease'
                        }} key={type.name}>{type.name}</Button>
                    ))}
                </Box>
            )}
        </Box>
    );
};