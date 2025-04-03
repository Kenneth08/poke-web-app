import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { typeColors } from "../materialStyles";

export default function ResponsiveTypeMenu(props) {
  const { types } = props;
  const navigate = useNavigate();
  if (!types) return null;

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
      }}
    >
      {types.results.map((type) => (
        <Grid
          key={type.name}
          sx={{
            flex: "1 0 25%",
            minWidth: "100px",
            maxWidth: "200px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            fullWidth
            sx={{
              backgroundColor: "#D2D4C8",
              color: "#2E3532",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: typeColors[type.name] || "#A8A878",
                color: "#FFFFFF",
                transform: "translateY(-2px)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              },
              transition: "all 0.3s ease",
              py: 1.5,
              height: "100%",
            }}
            onClick={() =>
              navigate(`/type`, {
                state: {
                  type: type.name,
                  typeId: type.url.match(/\/(\d+)\/?$/)[1],
                },
              })
            }
          >
            {type.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
