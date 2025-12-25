import { Box } from "@mui/material";

export default function SlideBox({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        scrollSnapAlign: "start",
        p: 4,
      }}
    >
      {children}
    </Box>
  );
}
