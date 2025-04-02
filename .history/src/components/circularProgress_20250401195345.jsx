import { CircularProgress } from '@mui/material';

export default function CircularLoading(props){ 
    const{size}=props;
    return (
    <CircularProgress size={size} />
)
};