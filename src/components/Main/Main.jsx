import { Box, Container } from "@mui/material";
import SelectList from "../SelectList/SelectList";

function Main() {
  return (
    <Box component="main">
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <SelectList />
      </Container>
    </Box>
  );
}

export default Main;
