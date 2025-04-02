import { Box, Grid, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { typeColors } from '../materialStyles';

export default function ResponsiveTypeMenu(props) {
    const {types} = props;
    const navigate = useNavigate();
    if (!types) return null;

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            p: 2
        }}>
            <Grid container spacing={2} sx={{
                maxWidth: '1200px',
                justifyContent: 'center'
            }}>
                {types.results.map(type => (
                            <Grid
                                key={type.name}
                                size={{xs:6, sm:4, md:3, lg:2}}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    minWidth: '120px' 
                                }}
                            >
                                <Button
                                    fullWidth
                                    sx={{
                                        backgroundColor: '#D2D4C8',
                                        color: '#2E3532',
                                        textTransform: 'capitalize',
                                        '&:hover': {
                                            backgroundColor: typeColors[type.name] || '#A8A878',
                                            color: '#FFFFFF',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                        },
                                        transition: 'all 0.3s ease',
                                        py: 1.5,
                                        height: '100%'
                                    }}
                                    onClick={()=> navigate(`/type`, { state: { type: type.name, typeId: type.url.match(/\/(\d+)\/?$/)[1]} })}
                                >
                                    {type.name}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            );
        }