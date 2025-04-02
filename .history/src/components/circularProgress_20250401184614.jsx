import { Box, CircularProgress } from '@mui/material';

export default function CircularLoading(props){ 
    const{size}=props;
    return (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >
    <CircularProgress size={size} />
  </Box>
)
};