import { useQuery } from '@tanstack/react-query';
import { CircularLoading, TypesMenu, Header } from '../components';
import { Box, Typography } from "@mui/material";
import { pokemonTypes } from "../fetchers/pokeApi";

export default function Home() {
    const { data: types, isLoading: loadingTypes} = useQuery(
        {
            queryKey: ['types'],
            queryFn: () => pokemonTypes()
        });
    if (loadingTypes && !types)
        return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        > <CircularLoading size={60} />
        </Box>
        );
    return (
        <>
        <Header bgColor="#8B2635" textColor="#E0E2DB" />
        <Box sx={{ 
            p: 3,
            maxWidth: 1200,
            mx: 'auto'
        }}>
            <Typography variant="h4" sx={{ 
                mb: 3,
                color: '#D2D4C8',
                textAlign: 'center'
            }}>
                Choose a Pokémon type
            </Typography>
            <TypesMenu types={types} />
        </Box>
    </>
    );
}