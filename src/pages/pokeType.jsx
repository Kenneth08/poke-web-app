import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Header, Card, Modal } from "../components";
import { Box, Grid, Pagination, TextField, Typography, Skeleton } from "@mui/material";
import { pokemonsByType, pokemonDetail } from "../fetchers/pokeApi";
import { typeColors } from "../materialStyles";

export default function PokeType() {
    const location = useLocation();
    const { type, typeId } = location.state || {};
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSkeleton, setShowSkeleton] = useState(true);
    const itemsPerPage = 20;

    const { data: pokesType, isLoading: loadingPokesType } = useQuery({
        queryKey: ["pokesType"],
        queryFn: () => pokemonsByType(typeId),
    });

    const {
        data: pokemon,
        isLoading: loadingPokemon,
        refetch: refetchPokemon,
    } = useQuery({
        queryKey: ["pokemonDetail"],
        queryFn: () => (selectedPokemon ? pokemonDetail(selectedPokemon) : {}),
    });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSelection = (id) => {
        setSelectedPokemon(id);
    };

    const filteredData = pokesType?.pokemon?.filter((element) =>
        element.pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
    const paginatedData = filteredData?.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    useEffect(() => {
        if (selectedPokemon) refetchPokemon();
    }, [selectedPokemon, refetchPokemon]);

    useEffect(() => {
        const timer = setTimeout(() => setShowSkeleton(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Header bgColor="#E0E2DB" textColor="#8B2635" />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: "center",
                    gap: 2,
                    mt: 12,
                    mb: 4
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontFamily: "monospace",
                        mr: 2,
                        px: 3,
                        py: 2,
                        backgroundColor: typeColors[type] || "#A8A878",
                        color: "white",
                        borderRadius: "50px",
                        textAlign: "center",
                        boxShadow: 2,
                        width: "fit-content",
                        maxWidth: 500,
                        textTransform: "capitalize",
                    }}
                >
                    Type: {type}
                </Typography>

                <TextField
                    fullWidth
                    color="primary"
                    label={`Search ${type} pokémon...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                        maxWidth: 250,
                        fontFamily: "monospace",
                        borderRadius: "15px",
                        "& .MuiInputLabel-root": {
                            color: "white",
                        },
                        "& .MuiInputBase-input": {
                            color: "white",
                        },
                    }}
                />
            </Box>
            <Grid
                container
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    justifyContent: "center",
                }}
            >
                {showSkeleton || loadingPokesType
                    ?
                    Array.from(new Array(20)).map((_, index) => (
                        <Grid
                            key={index}
                            sx={{
                                flex: "1 0 25%",
                                minWidth: "200px",
                                maxWidth: "300px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Skeleton
                                animation="wave"
                                variant="rounded"
                                width={250}
                                height={200}
                            />
                        </Grid>
                    ))
                    :
                    paginatedData.map((element) => {
                        const pokemonId = element.pokemon.url.match(/\/(\d+)\/?$/)[1];
                        return (
                            <Grid
                                key={element.pokemon.name}
                                sx={{
                                    flex: "1 0 25%",
                                    minWidth: "200px",
                                    maxWidth: "300px",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Card
                                    action={handleOpen}
                                    pokemonId={pokemonId}
                                    selected={handleSelection}
                                    name={element.pokemon.name}
                                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`}
                                />
                            </Grid>
                        );
                    })}
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(event, value) => setPage(value)}
                    color="primary"
                    size="large"
                />
            </Box>
            <Modal
                data={pokemon}
                loading={loadingPokemon}
                open={open}
                close={handleClose}
            />
        </div>
    );
}
