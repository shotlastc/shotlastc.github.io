import { Box, Typography, Chip, Stack, IconButton } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: "completed" | "in-progress" | "contribution";
}

function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  githubUrl,
  status = "completed",
}: ProjectCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "completed":
        return "rgba(76, 175, 80, 0.3)";
      case "in-progress":
        return "rgba(255, 193, 7, 0.3)";
      case "contribution":
        return "rgba(33, 150, 243, 0.3)";
      default:
        return "rgba(255, 255, 255, 0.05)";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "contribution":
        return "Open Source";
      default:
        return "";
    }
  };

  return (
    <Box
      sx={{
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "12px",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        p: 2,
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-2px)",
          background: "rgba(255, 255, 255, 0.08)",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: getStatusColor(),
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              fontWeight: 600,
              color: "white",
              mb: 0.5,
              fontSize: "0.95rem",
            }}
          >
            {title}
          </Typography>
          <Chip
            label={getStatusText()}
            size="small"
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              fontSize: "0.7rem",
              height: "20px",
              backgroundColor: getStatusColor(),
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          />
        </Box>
        <Stack direction="row" spacing={0.5}>
          {liveUrl && (
            <IconButton
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              component="a"
              size="small"
              sx={{
                color: "white",
                padding: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              <OpenInNewIcon sx={{ fontSize: "16px" }} />
            </IconButton>
          )}
          {githubUrl && (
            <IconButton
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              component="a"
              size="small"
              sx={{
                color: "white",
                padding: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              <GitHubIcon sx={{ fontSize: "16px" }} />
            </IconButton>
          )}
        </Stack>
      </Box>

      <Typography
        sx={{
          fontFamily: "JetBrains Mono Variable, monospace",
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: "0.8rem",
          mb: 1.5,
          lineHeight: 1.4,
        }}
      >
        {description}
      </Typography>

      <Stack direction="row" flexWrap="wrap" gap={0.5}>
        {tags.slice(0, 4).map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              fontSize: "0.65rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "rgba(255, 255, 255, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              height: "20px",
            }}
          />
        ))}
        {tags.length > 4 && (
          <Chip
            label={`+${tags.length - 4}`}
            size="small"
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              fontSize: "0.65rem",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "rgba(255, 255, 255, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              height: "20px",
            }}
          />
        )}
      </Stack>
    </Box>
  );
}

export default function ProjectsSlide() {
  const projects = [
    {
      title: "Dr. Panchuk CRM",
      description:
        "Full-stack CRM system for medical clinic with patient records, appointment scheduling, and analytics.",
      tags: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
      liveUrl: "https://crm.drpanchuk.com.ua/",
      status: "completed" as const,
    },
    {
      title: "Custom Mechanical Keyboard",
      description:
        "Hardware development: PCB with ATmega32U4, hot-swap, RGB per-key, OLED. Custom firmware from scratch.",
      tags: ["ATmega32U4", "PCB Design", "Custom Firmware", "Embedded"],
      status: "completed" as const,
    },
    {
      title: "T12 Soldering Station",
      description:
        "Soldering station with T12 tips and hot air. PID temperature control, OLED display, adjustable airflow.",
      tags: ["Hardware", "Arduino", "PCB Design", "PID Control"],
      status: "completed" as const,
    },
    {
      title: "Web3 Farm Platform",
      description:
        "Microservices platform for crypto mining with dynamic farm deployment and real-time monitoring.",
      tags: ["React", "FastAPI", "Docker", "Microservices"],
      status: "in-progress" as const,
    },
    {
      title: "Cyberpunk Blender Add-on",
      description:
        "Open-source contribution for importing Cyberpunk 2077 assets into Blender for 3D workflows.",
      tags: ["Python", "Blender", "3D Graphics", "Open Source"],
      githubUrl: "https://github.com/WolvenKit/Cyberpunk-Blender-add-on/",
      status: "contribution" as const,
    },
  ];

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        //justifyContent: "center",
        p: 4,
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "4px",
          "&:hover": {
            background: "rgba(255, 255, 255, 0.3)",
          },
        },
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "JetBrains Mono Variable, monospace",
            fontWeight: 700,
            color: "white",
            mb: 1,
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          Featured Projects
        </Typography>
        <Typography
          sx={{
            fontFamily: "JetBrains Mono Variable, monospace",
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "0.95rem",
          }}
        >
          A selection of my recent work and contributions
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: 2,
          pb: 2,
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Box>
    </Box>
  );
}
