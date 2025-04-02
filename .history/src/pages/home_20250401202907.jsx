// import { useState } from "react";
import { pokemonTypes } from "../fetchers/pokemons";
import { useQuery } from '@tanstack/react-query';
import { CircularLoading, TypesMenu, Header } from '../components';
import { Box, Typography } from "@mui/material";

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
        <Header />
        <Box sx={{ 
            p: 3,
            maxWidth: 1200,
            mx: 'auto' // centers the content
        }}>
            <Typography variant="h4" sx={{ 
                mb: 3,
                color: '#2E3532',
                textAlign: 'center'
            }}>
                Choose a Pokémon type
            </Typography>
            <TypesMenu types={types} />
        </Box>
    </>
    );
}