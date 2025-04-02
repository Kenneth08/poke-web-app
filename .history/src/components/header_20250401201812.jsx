import { Box, IconButton, Typography, AppBar, Toolbar, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveTypeMenu from './typesMenu';

export default function Header(props) {
    const { types } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar position="static" sx={{ backgroundColor: '#8B2635' }}>
            <Toolbar>
                {/* Mobile Menu Icon (only shown on small screens) */}
                {isMobile && (
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}

                {/* Main Title */}
                <Typography
                    variant="h1"
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        color: '#E0E2DB',
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        py: 2,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}
                >
                    Pokédex
                </Typography>

                {/* Spacer for mobile layout */}
                {isMobile && <Box sx={{ width: 48 }} />}
            </Toolbar>

            {/* Type Navigation */}
            <Box sx={{
                backgroundColor: '#2E3532',
                py: 1,
                borderTop: '2px solid #E0E2DB',
                borderBottom: '2px solid #E0E2DB'
            }}>
                <ResponsiveTypeMenu types={types} />
            </Box>
        </AppBar>
    );
};

