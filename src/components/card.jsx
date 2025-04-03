import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
    Box
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
                <Typography variant="h6" sx={{ 
                    fontFamily: 'monospace', 
                    textTransform: 'capitalize',
                    // color: ' #2E3532',
                    textShadow: '2px 2px 0 rgb(102, 109, 106)',
                    fontSize: '1.5rem',
                    letterSpacing: '2px'
                     }}>
                    {name}
                </Typography>
                <Box  sx={{
                    justifyItems:'end'}}>
                <Typography variant="subtitle1" sx={{
                    mt:9,
                    fontFamily: 'monospace',
                    color: ' #2E3532',
                    textShadow: '1px 1px 0 rgb(102, 109, 106)',
                    fontSize: '1.5rem',
                    letterSpacing: '2px'
                }}>
                    #{pokemonId.toString().padStart(3, '0')}
                </Typography>
                </Box>
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
                      component="div"
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: '150px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src={image}
                        alt={name}
                        style={{
                          position: 'absolute',
                          objectFit: 'contain',
                          width: '100%',
                          height: '100%',
                        }}
                      />
                </CardMedia>
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