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
        right: 20,
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "center",
        pointerEvents: "auto",
      }}
    >
      {[...Array(pages)].map((_, index) => (
        <Box
          key={index}
          onClick={() => onPageClick(index)}
          sx={{
            width: 12,
            height: 12,
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
