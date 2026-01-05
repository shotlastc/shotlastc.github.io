import Box from "@mui/material/Box";
import ScrollButton from "./ScrollButton";

interface NavigationButtonProps {
  position: "top" | "bottom";
  onClick: () => void;
  text: string;
}

export default function NavigationButton({
  position,
  onClick,
  text,
}: NavigationButtonProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        [position]: { xs: 10, sm: 15, md: 20 },
        left: "50%",
        transform: "translateX(-50%)",
        pointerEvents: "auto",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        display: { xs: "none", sm: "block" },
        "&:hover": {
          transform: "translateX(-50%) scale(1.05)",
        },
      }}
      onClick={onClick}
    >
      <ScrollButton variant={0} width={100} height={35} text={text} />
    </Box>
  );
}
