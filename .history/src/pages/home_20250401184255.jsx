// import { useState } from "react";
import { pokemonTypes } from "../fetchers/pokemons";
import { useQuery } from '@tanstack/react-query';
import { Box, Typography, Button } from "@mui/material";

export default function Home() {
    const { data: types, isLoading: loadingTypes, /*isSuccess: successTypes*/ } = useQuery(
        {
            queryKey: ['types'],
            queryFn: () => pokemonTypes()
        });
    if (loadingTypes && !types) return ( <CircularProgress size={60} />)
    return (
        <Box>
            <Button onClick={() => console.log(types)}>Test</Button>
            {types?.results?.map(type => (
                <Button key={type.name}>{type.name}</Button>
            ))}
        </Box>
    );
}