import Box from "@mui/material/Box";

interface PageNavigationDotsProps {
  pages: number;
  activePage: number;
  onPageClick: (index: number) => void;
}

export default function PageNavigationDots({
  pages,
  activePage,
  onPageClick,
}: PageNavigationDotsProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        right: { xs: 10, sm: 15, md: 20 },
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: { xs: 0.8, md: 1 },
        alignItems: "center",
        pointerEvents: "auto",
      }}
    >
      {[...Array(pages)].map((_, index) => (
        <Box
          key={index}
          onClick={() => onPageClick(index)}
          sx={{
            width: { xs: 10, md: 12 },
            height: { xs: 10, md: 12 },
            borderRadius: "50%",
            backgroundColor:
              activePage === index ? "white" : "rgba(255,255,255,0.3)",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        />
      ))}
    </Box>
  );
}
