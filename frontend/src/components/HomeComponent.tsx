import { Box, Typography, Button, Grid } from "@mui/material";
import image from "/src/assets/home-image.png";

export default function HomeComponent() {
  return (
    <Grid container>
      <Grid item xs={12} md={6} display="flex" alignItems={"center"}>
        <Title />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item xs={10} md={10} padding="20px">
          <InfoGraphic />
        </Grid>
      </Grid>
    </Grid>
  );
}

function InfoGraphic() {
  return <img src={image} width="100%" />;
}

// It's true - Title, Subtitle, and Button.
function Title() {
  return (
    <Box padding="20px" paddingTop="50px" paddingBottom="50px">
      <Typography fontSize={52} fontWeight={600} color="white">
        isItTrue API
      </Typography>
      <Typography color="white" paddingBottom="10px">
        use isItTrue to tell if it's true!
      </Typography>
      <Button
        variant="contained"
        sx={{
          color: "#3874CB",
          backgroundColor: "white",
          border: 2,
          borderColor: "white",

          "&:hover": {
            backgroundColor: "#3874CB",
            borderColor: "white",
            border: 2,
            color: "white",
          },
        }}
      >
        <Typography fontSize={16} fontWeight={600}>
          VIEW DOCS
        </Typography>
      </Button>
    </Box>
  );
}
