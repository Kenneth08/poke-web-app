import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CircularLoading, Header, Card, Modal } from "../components";
import { Box, Grid, Pagination, TextField, Typography } from "@mui/material";
import { pokemonsByType, pokemonDetail } from "../fetchers/pokeApi";
import { typeColors } from "../materialStyles";

export default function PokeType() {
  const location = useLocation();
  const { type, typeId } = location.state || {};
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
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

  if (loadingPokesType)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularLoading size={60} />
      </Box>
    );
  return (
    <div>
      <Header bgColor="#E0E2DB" textColor="#8B2635" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          my: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "monospace",
            mt: 12,
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
        <Box sx={{ mt: 12, width: 300 }}>
          <TextField
            fullWidth
            color="primary"
            label={`Search ${type} pokémon...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              maxWidth: 300,
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
      </Box>
      <Grid container spacing={2} sx={{ px: 2 }}>
        {paginatedData.map((element) => {
          const pokemonId = element.pokemon.url.match(/\/(\d+)\/?$/)[1];
          return (
            <Grid
              key={element.pokemon.name}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            >
              <Card
                action={handleOpen}
                pokemonId={pokemonId}
                selected={handleSelection}
                name={element.pokemon.name}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemonId}.png`}
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
