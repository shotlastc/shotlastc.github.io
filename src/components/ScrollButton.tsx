import { Box, Typography } from "@mui/material";
import GlassSurface from "./GlassSurface";

export default function ScrollButton({
  variant = 0,
  width,
  height,
  text,
}: {
  variant?: number;
  width?: number;
  height?: number;
  text?: string;
}) {
  const body = (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="body2"
        color="white"
        sx={{
          fontFamily: "JetBrains Mono Variable, monospace",
          fontWeight: 500,
        }}
      >
        {text}
      </Typography>
    </Box>
  );

  return variant ? (
    <GlassSurface
      displace={5}
      distortionScale={-150}
      redOffset={5}
      greenOffset={15}
      blueOffset={25}
      brightness={60}
      opacity={0.8}
      mixBlendMode="screen"
      width={width}
      height={height}
      borderRadius={20}
    >
      {body}
    </GlassSurface>
  ) : (
    <Box
      sx={{
        width: width,
        height: height,
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "20px",
        background: "rgba(255, 255, 255, 0.1)",
        //backdropFilter: "blur(10px)",
      }}
    >
      {body}
    </Box>
  );
}
