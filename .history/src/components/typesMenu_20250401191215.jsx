import { useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    useMediaQuery,
    useTheme
} from "@mui/material";
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
                            >
                                {type.name}
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            ) : (
                <Box>
                    {types.results.map(type => (
                        <Button key={type.name}>{type.name}</Button>
                    ))}
                </Box>
            )}
        </Box>
    );
};