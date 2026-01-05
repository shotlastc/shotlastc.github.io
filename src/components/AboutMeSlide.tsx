import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import {
  Box,
  Chip,
  Stack,
  Typography,
  IconButton,
  type IconButtonProps,
} from "@mui/material";

function StyledChip({ label }: { label: string }) {
  return (
    <Chip
      label={label}
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        color: "white",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        fontFamily: "JetBrains Mono Variable, monospace",
        fontWeight: 500,
        fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.875rem" },
        height: { xs: "24px", sm: "28px", md: "32px" },
      }}
    />
  );
}

interface StyledIconButtonProps extends IconButtonProps {
  href?: string;
  target?: string;
  rel?: string;
  component?: "a";
}

function StyledIconButton({ children, ...props }: StyledIconButtonProps) {
  return (
    <IconButton
      {...props}
      sx={{
        border: "1px solid rgba(255,255,255,0.2)",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        padding: { xs: "6px", sm: "8px" },
      }}
    >
      {children}
    </IconButton>
  );
}

export default function AboutMeSlide() {
  return (
    <Box
      sx={{
        height: "100%",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('/photo.png')`,
          backgroundSize: "cover",
          backgroundPosition: {
            xs: "calc(50% - 12vw) calc(50% - 10vh)",
            md: "right -15vw bottom 0px",
          },
          backgroundRepeat: "no-repeat",
          opacity: { xs: 0.9, sm: 0.9, md: 0.9 },
          maskImage: {
            xs: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 60%, transparent 90%)",
            md: "linear-gradient(to left, black 0%, black 20%, transparent 50%)",
          },
          pointerEvents: "none",
        },
      }}
    >
      <Box
        p={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          mt: { xs: "40vh", sm: 8, md: 0 },
          maxWidth: { xs: "100%", md: 600 },
          position: "relative",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "JetBrains Mono Variable, monospace",
            mb: { xs: 2, md: 3 },
            background: "linear-gradient(135deg, #ffffff 0%, #ffffff5b 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
            letterSpacing: "0.05em",
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
            animation: "fadeInUp 0.8s ease-out",
            "@keyframes fadeInUp": {
              from: { opacity: 0, transform: "translateY(20px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          Yurii Makhniboroda
        </Typography>

        <Stack
          direction="row"
          spacing={{ xs: 0.8, sm: 1, md: 1 }}
          alignItems="center"
          useFlexGap
          flexWrap="wrap"
          sx={{
            mb: { xs: 2, md: 3 },
            gap: { xs: 0.8, sm: 0.8, md: 0.5 },
            animation: "fadeInUp 0.8s ease-out 0.2s both",
          }}
        >
          <StyledChip label="Software Engineer" />
          <StyledChip label="Web Developer" />
          <StyledChip label="Tech Enthusiast" />
          <StyledChip label="3D Artist" />
        </Stack>

        <Box
          p={{ xs: 1.5, sm: 2 }}
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: { xs: "12px", md: "20px" },
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            color="white"
            variant="body1"
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              fontWeight: 400,
              fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
              animation: "fadeInUp 0.8s ease-out 0.4s both",
            }}
          >
            I create hardware. I code software. I sculpt virtual spaces.
          </Typography>
        </Box>

        <Box
          p={{ xs: 2, sm: 2.5, md: 3 }}
          sx={{
            mt: { xs: 3, sm: 5, md: 5 },
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: { xs: "12px", md: "20px" },
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography
            color="#ffffffcc"
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              fontWeight: 300,
              lineHeight: 1.8,
              fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.95rem" },
              animation: "fadeInUp 0.8s ease-out 0.6s both",
            }}
          >
            I create elegant digital experiences through code and design.
            Passionate about building interactive web applications, 3D
            visualizations, and pushing the boundaries of what's possible on the
            web. Let's build something extraordinary together.
          </Typography>
        </Box>
      </Box>

      <Stack
        direction="column"
        spacing={{ xs: 0.8, sm: 1 }}
        sx={{
          position: "absolute",
          top: { xs: 10, sm: 15, md: 20 },
          right: { xs: 10, sm: 15, md: 20 },
        }}
      >
        <StyledIconButton
          href="https://www.instagram.com/5aych07/"
          target="_blank"
          rel="noopener noreferrer"
          component="a"
        >
          <Instagram sx={{ fontSize: { xs: "20px", sm: "24px" } }} />
        </StyledIconButton>
        <StyledIconButton
          href="https://www.linkedin.com/in/yurii-makhniboroda-605096219/"
          target="_blank"
          rel="noopener noreferrer"
          component="a"
        >
          <LinkedIn sx={{ fontSize: { xs: "20px", sm: "24px" } }} />
        </StyledIconButton>
        <StyledIconButton
          href="https://github.com/shotlastc"
          target="_blank"
          rel="noopener noreferrer"
          component="a"
        >
          <GitHub sx={{ fontSize: { xs: "20px", sm: "24px" } }} />
        </StyledIconButton>
      </Stack>
    </Box>
  );
}
