import { Box, Typography, Grid } from "@mui/material";
import ItsTrueImage from "../assets/its-true.png";
import ItsNotTrueImage from "../assets/its-not-true.png";

export default function FeaturesComponent() {
  return (
    <Box width="100%">
      <Box display="flex" flexDirection={"column"} alignItems={"center"} justifyContent="center" paddingTop={"100px"}>
        <Typography fontSize={"0.75rem"} fontWeight={700} color="#3874CB">
          FEATURES
        </Typography>
        <Typography fontSize={"1.625rem"} fontWeight={700} color="#333">
          Let our API deliver instant truth insights
        </Typography>
      </Box>

      <Box padding="30px">
        <Grid
          container
          display="flex"
          alignItems={"center"}
          justifyContent="center"
        >
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
          >
            <Grid item xs={6} md={10} display="flex" alignItems={"center"}>
              <Feature
                image={ItsTrueImage}
                title="It's true!"
                subtitle="It's easy to tell if it's true."
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
          >
            <Grid item xs={6} md={10} display="flex" alignItems={"center"}>
              <Feature
                image={ItsNotTrueImage}
                title="It's not true."
                subtitle="It's easy to tell if it's false."
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// Feature Component - Image, Title, and Subtitle.
function Feature(props: { image: string; title: string; subtitle: string }) {
  return (
    <Box
      padding="20px"
      paddingTop="50px"
      paddingBottom="50px"
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      <img src={props.image} width="100%" />
      <Typography fontSize={20} fontWeight={600}>
        {props.title}
      </Typography>
      <Typography fontSize={16} fontWeight={300}>
        {props.subtitle}
      </Typography>
    </Box>
  );
}
