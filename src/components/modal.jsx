import {
  Modal,
  Backdrop,
  Box,
  Fade,
  Typography,
  Grid,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CircularLoading from "./circularProgress";

export default function CustomModal(props) {
  const { open, close, data, loading } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  if (loading) return(<CircularLoading size={60} />)
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={close}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: { backgroundColor: 'rgba(0, 0, 0, 0.7)' }
        },
      }}
    >
        <Fade in={open}>
          <Box sx={{
            display: 'flex',
            flexDirection: isSmallScreen ? 'column' : 'row',
            backgroundColor: '#2E3532',
            color: '#E0E2DB',
            borderRadius: 3,
            width: isSmallScreen ? '90%' : '600px',
            minHeight: '250px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0px 5px 15px rgba(0,0,0,0.3)',
            overflow: 'hidden'
          }}>
            <Box sx={{
              flex: 1,
              backgroundColor: '#D2D4C8',
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Typography
                id="transition-modal-title"
                variant="h5"
                component="h2"
                sx={{
                  color: '#8B2635',
                  fontWeight: 'bold',
                  alignSelf: isSmallScreen ? 'center' : 'flex-start',
                  mb: 2,
                  textAlign: isSmallScreen ? 'center' : 'left'
                }}
              >
                {data?.name?.toUpperCase()}
              </Typography>

              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
                alt={data.name}
                style={{ width: '200px', height: '200px' }}
              />
            </Box>
            <Box sx={{
              flex: 1,
              backgroundColor: '#2E3532',
              padding: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#E0E2DB',
              minHeight: isSmallScreen ? 'auto' : '250px'
            }}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '22px',
                  mb: 2
                }}
              >
                Abilities
              </Typography>

              <Grid  
                container 
                spacing={1} 
                direction={isSmallScreen ? "column" : "row"}
                justifyContent="center"
                alignItems="center">
                {data?.abilities?.map((ability) => (
                  <Grid
                    key={ability.ability.name}
                    size={{ xs: 12, sm: 12 }}
                    sx={{
                      backgroundColor: '#8B2635',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      margin: '4px',
                      color: '#E0E2DB',
                      fontWeight: 'bold',
                      textAlign: 'center'
                    }}
                  >
                    <Typography sx={{
                      fontWeight: 'bold',
                      fontSize: '16px',
                    }}>{ability.ability.name}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>

          </Box>
        </Fade>
    </Modal>
  );
}
