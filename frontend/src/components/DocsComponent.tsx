import { Box, Typography, Button, Grid } from "@mui/material";
import { CodeBlock } from '@atlaskit/code';

// {
//   "iseven": true,
//   "ad": "Buy isEvenCoin, the hottest new cryptocurrency!"
// }

export default function DocComponent() {
  const text = `$ curl https://api.isevenapi.xyz/api/iseven/6/` + "\n" +
  `{` + "\n" +
  `    isItTrue: "It's true!` + "\n" +
  `}` + "\n";
  return (
    <Box width="100%">
      <Box padding="30px">
        <Grid container>
          <Grid item xs={12} md={6}>
            {/* Title and description */}
            <Grid item xs={12}>
              <Box>
                <Typography fontSize={"1.625rem"} fontWeight={700} color="#333">
                  isItTrue Public API Docs
                </Typography>
                <Typography
                  fontSize={14}
                  fontWeight={400}
                  color="#333"
                  paddingLeft="20px"
                >
                  isItTrue API is a RESTful API that returns if it's true.
                </Typography>
                <Typography
                  fontSize={14}
                  fontWeight={400}
                  color="#333"
                  paddingLeft="20px"
                >
                  API URL: https://api.isItTrue.xyz/api/
                </Typography>

                <Typography
                  fontSize={"1.625rem"}
                  fontWeight={700}
                  color="#333"
                  paddingTop="20px"
                >
                  {"GET /api/v2/is-it-true/<value>/"}
                </Typography>
                <Typography
                  fontSize={14}
                  fontWeight={400}
                  color="#333"
                  paddingLeft="20px"
                >
                  Returns whether a given number is even. Allowed numbers depend
                  on your API tier. See Pricing below.
                </Typography>

                <Typography
                  fontSize={"1.25rem"}
                  fontWeight={700}
                  color="#333"
                  paddingTop="20px"
                >
                  URL Parameters
                </Typography>
                <Typography
                  fontSize={14}
                  fontWeight={400}
                  color="#333"
                  paddingLeft="20px"
                >
                  value: the value you want to check
                </Typography>

                <Typography
                  fontSize={"1.25rem"}
                  fontWeight={700}
                  color="#333"
                  paddingTop="20px"
                >
                  Example
                </Typography>
                <Typography
                  fontSize={14}
                  fontWeight={400}
                  color="#333"
                  paddingLeft="20px"
                  paddingBottom="50px"
                >
                  https://api.isItTrue.xyz/api/v2/is-it-true/true/
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Code example */}
          <Grid item xs={12} md={6}>
            <Box width="100%">
              <Typography fontSize={"0.825rem"} fontWeight={700} color="#333" paddingBottom="20px">
                Example API Response
              </Typography>
              <CodeBlock
                language="text"
                text={text}
                showLineNumbers={false}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}