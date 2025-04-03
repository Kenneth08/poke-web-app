import { useNavigate } from "react-router-dom";
import { Typography, AppBar } from '@mui/material';

export default function Header(props) {
    const { bgColor, textColor } = props;
    const navigate = useNavigate();
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: bgColor,
                zIndex: (theme) => theme.zIndex.drawer + 1,
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 80,
                px: 2
            }}
        >
            <Typography
                onClick={() => navigate('/')}
                variant="h1"
                sx={{
                    fontFamily: 'monospace',
                    color: textColor,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%',
                    textAlign: 'center'
                }}
            >
                Pokédex
            </Typography>
        </AppBar>
    );
};