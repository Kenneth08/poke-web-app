import { Typography, AppBar, Toolbar } from '@mui/material';

export default function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#8B2635' }}>
            <Toolbar sx={{ justifyContent: 'center' }}>
                <Typography
                    variant="h1"
                    sx={{
                        color: '#E0E2DB',
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        py: 2,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}
                >
                    Pokédex
                </Typography>
            </Toolbar>
        </AppBar>
    );
};