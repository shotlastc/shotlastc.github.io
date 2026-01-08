import { Box, type BoxProps } from "@mui/material";

interface SlideBoxProps extends BoxProps {
  children: React.ReactNode;
}

export default function SlideBox({ children, ...props }: SlideBoxProps) {
  return (
    <Box
      {...props}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        scrollSnapAlign: "center",
        p: { xs: 2, sm: 3, md: 4 },
        maxWidth: "100vw",
        overflowX: "hidden",
        boxSizing: "border-box",
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
}
