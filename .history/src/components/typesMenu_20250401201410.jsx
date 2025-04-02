import { useState } from 'react';
import {
    Box,
    Grid,
    Button,
    IconButton,
    Menu,
    MenuItem,
    useMediaQuery,
    useTheme,

} from "@mui/material";
import { typeColors } from '../materialStyles';
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

                    >
                        {types.results.map(type => (
                            <MenuItem
                                key={type.name}
                                onClick={handleMenuClose}
                                sx={{
                                    backgroundColor: '#D2D4C8',
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
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        p: 2
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            maxWidth: '1200px', // Adjust this as needed
                            justifyContent: 'center'
                        }}
                    >
                        {types.results.map(type => (
                            <Grid
                                size={{xs:6,
                                sm:4,
                                md:3}}
                                key={type.name}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <Button
                                    fullWidth
                                    sx={{
                                        backgroundColor: '#D2D4C8',
                                        color: '#2E3532',
                                        '&:hover': {
                                            backgroundColor: typeColors[type.name] || '#A8A878',
                                            color: '#FFFFFF',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                        },
                                        transition: 'all 0.3s ease',
                                        py: 1.5,
                                        mx: 0.5
                                    }}
                                >
                                    {type.name}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </Box>
    );
};