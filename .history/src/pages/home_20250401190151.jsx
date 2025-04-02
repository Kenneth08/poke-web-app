// import { useState } from "react";
import { pokemonTypes } from "../fetchers/pokemons";
import { useQuery } from '@tanstack/react-query';
import { CircularLoading } from '../components';
import { Box, Button } from "@mui/material";

export default function Home() {
    const { data: types, isLoading: loadingTypes, /*isSuccess: successTypes*/ } = useQuery(
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
        <Box>
            {types?.results?.map(type => (
                <Button key={type.name}>{type.name}</Button>
            ))}
        </Box>
    );
}