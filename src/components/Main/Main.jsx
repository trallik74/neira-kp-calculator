import { Box, Container } from "@mui/material";
import SelectArea from "../SelectArea/SelectArea";

function Main() {
  return (
    <Box component="main">
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: 6,
        }}
      >
        <SelectArea />
      </Container>
    </Box>
  );
}

export default Main;
