import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea
} from '@mui/material';

export default function CustomCard(props) {
    const { name, image, pokemonId, action, selected } = props;

    return (
        <Card sx={{
            position: 'relative',
            height: '90%',
            background: 'linear-gradient(to bottom, #8B2635 50%, #E0E2DB 50%)',
            color: 'white',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                animation: 'shine 0.5s forwards',
            },
            '@keyframes shine': {
                '0%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)' },
                '50%': { boxShadow: '0 0 15px rgba(255, 255, 255, 0.7)' },
                '100%': { boxShadow: '0 0 25px rgba(255, 255, 255, 1)' }
            }
        }}>
            <CardContent sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                transition: 'opacity 0.3s ease',
                pointerEvents: 'none', // Prevent interaction issues
                '.MuiCard-root:hover &': { opacity: 0 }
            }}>
                <Typography variant="h6" sx={{    fontFamily: 'monospace', textTransform: 'capitalize' }}>
                    {name}
                </Typography>
                <Typography variant="subtitle1" sx={{
                    fontFamily: 'monospace',
                    color: 'white',
                    textShadow: '2px 2px 0 #2E3532',
                    fontSize: '1rem',
                    letterSpacing: '2px'
                }}>
                    #{pokemonId.toString().padStart(3, '0')}
                </Typography>
            </CardContent>

            <CardActionArea
                onClick={() => {
                    action();
                    selected(pokemonId);
                }}
                sx={{
                    opacity: 0,
                    height: '100%',
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                        opacity: 1
                    }
                }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={name}
                    sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ textTransform: 'capitalize',
                             color: 'black',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            letterSpacing: '2px' }}
                    >
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}