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
        //borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.2)",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
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
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('/photo.png')`,
          backgroundSize: "cover",
          backgroundPosition: "right -15vw bottom 0px",
          backgroundRepeat: "no-repeat",
          opacity: 0.9,
          //filter: "blur(12px)",
          maskImage:
            "linear-gradient(to left, black 0%, black 20%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box p={4} sx={{ maxWidth: 600, position: "relative" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "JetBrains Mono Variable, monospace",
            mb: 3,
            background: "linear-gradient(135deg, #ffffff 0%, #ffffff5b 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
            letterSpacing: "0.05em",
            animation: "fadeInUp 0.8s ease-out",
            "@keyframes fadeInUp": {
              from: {
                opacity: 0,
                transform: "translateY(20px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          Yurii Makhniboroda
        </Typography>

        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{
            mb: 3,
            animation: "fadeInUp 0.8s ease-out 0.2s both",
            "@keyframes fadeInUp": {
              from: {
                opacity: 0,
                transform: "translateY(20px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          <StyledChip label="Software Engineer" />
          <StyledChip label="Web Developer" />
          <StyledChip label="Tech Enthusiast" />
          <StyledChip label="3D Artist" />
        </Stack>
        <Box
          p={2}
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "20px",
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
              // letterSpacing: "0.02em",
              // lineHeight: 1.6,
              //color: "rgba(255, 255, 255, 0.68)",
              animation: "fadeInUp 0.8s ease-out 0.4s both",
              "@keyframes fadeInUp": {
                from: {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            I code software, I sculpt virtual spaces.
          </Typography>
        </Box>
        {/* <Typography
                      variant="body1"
                      color="white"
                      sx={{ fontFamily: "JetBrains Mono Variable, monospace" }}
                    >
                      Software Engineer | Web Developer | Tech Enthusiast
                    </Typography> */}
        <Box
          p={3}
          sx={{
            mt: 8,
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "20px",
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
              fontSize: "0.95rem",
              animation: "fadeInUp 0.8s ease-out 0.6s both",
              "@keyframes fadeInUp": {
                from: {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
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
        spacing={1}
        sx={{ position: "absolute", top: 20, right: 20 }}
      >
        <StyledIconButton
          href="https://www.instagram.com/5aych07/"
          target="_blank"
          rel="noopener noreferrer"
          component="a"
        >
          <Instagram />
        </StyledIconButton>
        <StyledIconButton
          href="https://www.linkedin.com/in/yurii-makhniboroda-605096219/"
          target="_blank"
          rel="noopener noreferrer"
          component="a"
        >
          <LinkedIn />
        </StyledIconButton>
        <StyledIconButton
          href="https://github.com/shotlastc"
          target="_blank"
          rel="noopener noreferrer"
          component="a"
        >
          <GitHub />
        </StyledIconButton>
      </Stack>
    </Box>
  );
}
