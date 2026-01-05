import { Box } from "@mui/material";

export default function SlideBox({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        scrollSnapAlign: "start",
        p: { xs: 2, sm: 3, md: 4 },
        maxWidth: "100vw",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      {children}
    </Box>
  );
}
