import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

import { AttachMoney, Check, Clear } from "@mui/icons-material";

export default function PricingComponent() {
  return (
    <Box width="100%">
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent="center"
      >
        <Typography fontSize={"0.75rem"} fontWeight={700} color="#3874CB">
          PRICING
        </Typography>
        <Typography fontSize={"1.625rem"} fontWeight={700} color="#333">
          Pricing Options Table
        </Typography>
      </Box>

      <Box padding="30px">
        <Grid
          container
          display="flex"
          alignItems={"center"}
          justifyContent="center"
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
          >
            <Pricing
              title="PUBLIC"
              price="Free"
              includes={["isItTrue value API route", "Values: True and False"]}
              doesNotInclude={[
                "No advertisements",
                "AI Machine Learning Boosted",
                "24/7 support",
              ]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
          >
            <Pricing
              title="PREMIUM"
              price="1.99"
              includes={[
                "isItTrue value API route",
                "Values: True and False",
                "No advertisements",
              ]}
              doesNotInclude={["AI Machine Learning Boosted", "24/7 support"]}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
          >
            <Pricing
              title="ENTERPRISE"
              price="99.99"
              includes={[
                "isItTrue value API route",
                "Values: True and False",
                "No advertisements",
                "AI Machine Learning Boosted",
                "24/7 support",
              ]}
              doesNotInclude={[]}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// Feature Component - Image, Title, and Subtitle.
function Pricing(props: {
  title: string;
  price: string;
  includes: string[];
  doesNotInclude: string[];
}) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          width="100%"
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent="center"
          paddingTop="30px"
        >
          <Typography fontSize={18} fontWeight={700} color="#3874CB">
            {props.title}
          </Typography>
          <Typography fontSize={48} fontWeight={700} color="#333">
            <AttachMoney fontSize="small" />
            {props.price}
          </Typography>
          <Typography
            fontSize={12}
            fontWeight={300}
            color="#333"
            paddingBottom="30px"
          >
            monthly
          </Typography>
        </Box>
        <Divider />

        <Box paddingTop="30px" paddingBottom="30px">
          {props.includes.map((text: string, index: number) => {
            return (
              <Box key={index} display="flex" padding="5px">
                <Check fontSize="small" color="primary" />
                <Typography fontSize={14} color="#333" paddingLeft="5px">
                  {text}
                </Typography>
              </Box>
            );
          })}
          {props.doesNotInclude.map((text: string, index: number) => {
            return (
              <Box key={index} display="flex" padding="5px">
                <Clear fontSize="small" />
                <Typography fontSize={14} color="#333" paddingLeft="5px">
                  {text}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
}
