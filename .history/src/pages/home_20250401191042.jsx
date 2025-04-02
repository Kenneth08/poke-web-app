// import { useState } from "react";
import { pokemonTypes } from "../fetchers/pokemons";
import { useQuery } from '@tanstack/react-query';
import { CircularLoading, TypesMenu } from '../components';
import { Box } from "@mui/material";

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
                <TypesMenu types={types} />
            </Box>
    );
}