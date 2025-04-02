// import { useState } from "react";
import { pokemonTypes } from "../fetchers/pokemons";
import { useQuery } from '@tanstack/react-query';
import { Box, Typography, Button } from "@mui/material";

export default function Home (){
const {data: types, isLoading: loadingTypes, /*isSuccess: successTypes*/ } = useQuery(
    {
        queryKey: ['types'],
        queryFn: () => pokemonTypes()
    });
    if (loadingTypes && !types) return(<Box><Typography>Loading...</Typography></Box>)
    return(
    <Box>
        {types.forEach(type => {
            <Button>{type.name}</Button>
        })}
    </Box>
    );
}