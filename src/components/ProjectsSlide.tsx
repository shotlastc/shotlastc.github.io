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
        borderRadius: { xs: "10px", md: "12px" },
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        p: { xs: 1.5, md: 2 },
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
          mb: { xs: 0.8, md: 1 },
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
              fontSize: { xs: "0.85rem", md: "0.95rem" },
            }}
          >
            {title}
          </Typography>
          <Chip
            label={getStatusText()}
            size="small"
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              fontSize: { xs: "0.65rem", md: "0.7rem" },
              height: { xs: "18px", md: "20px" },
              backgroundColor: getStatusColor(),
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          />
        </Box>
        <Stack direction="row" spacing={0.5} mb={2}>
          {liveUrl && (
            <IconButton
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              component="a"
              size="small"
              sx={{
                color: "white",
                padding: { xs: "3px", md: "4px" },
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              <OpenInNewIcon sx={{ fontSize: { xs: "14px", md: "16px" } }} />
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
                padding: { xs: "3px", md: "4px" },
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              <GitHubIcon sx={{ fontSize: { xs: "14px", md: "16px" } }} />
            </IconButton>
          )}
        </Stack>
      </Box>

      <Typography
        sx={{
          fontFamily: "JetBrains Mono Variable, monospace",
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: { xs: "0.75rem", md: "0.8rem" },
          mb: { xs: 1, md: 1.5 },
          lineHeight: 1.4,
        }}
      >
        {description}
      </Typography>

      <Stack direction="row" flexWrap="wrap" gap={{ xs: 0.4, md: 0.5 }}>
        {tags.slice(0, 4).map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              fontSize: { xs: "0.6rem", md: "0.7rem" },
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "rgba(255, 255, 255, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              height: { xs: "18px", md: "20px" },
            }}
          />
        ))}
        {tags.length > 4 && (
          <Chip
            label={`+${tags.length - 4}`}
            size="small"
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              fontSize: { xs: "0.6rem", md: "0.65rem" },
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "rgba(255, 255, 255, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              height: { xs: "18px", md: "20px" },
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
      title: "Dr. Panchuk Website",
      description:
        "Modern medical clinic website with service catalog, and responsive design.",
      tags: ["React", "JavaScript", "Chakra-UI"],
      liveUrl: "https://www.drpanchuk.com.ua/",
      status: "completed" as const,
    },
    {
      title: "Dental CRM",
      description:
        "Full-stack CRM system for medical clinic with patient records and appointment scheduling.",
      tags: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
      liveUrl: "https://crm.drpanchuk.com.ua/",
      status: "in-progress" as const,
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
        "Soldering station with T12 tips and hot air. PID temperature control, OLED display.",
      tags: ["Hardware", "Arduino", "PCB Design", "PID Control"],
      status: "completed" as const,
    },
    {
      title: "Web3 Farm Platform",
      description:
        "Microservices platform for crypto activities with dynamic farm deployment and monitoring.",
      tags: ["React", "FastAPI", "Docker", "Microservices"],
      status: "in-progress" as const,
    },
    {
      title: "Cyberpunk Blender Add-on",
      description:
        "Open-source contribution for importing Cyberpunk 2077 assets into Blender.",
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
        p: { xs: 1, sm: 2, md: 4 },
        boxSizing: "border-box",
        maxWidth: { xs: "100vw", md: "1200px" },
        margin: "0 auto",
        overflowY: { xs: "visible", md: "auto" },
      }}
    >
      <Box sx={{ mb: { xs: 1.2, md: 3 } }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "JetBrains Mono Variable, monospace",
            fontWeight: 700,
            color: "white",
            mb: 1,
            fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2.5rem" },
          }}
        >
          Featured Projects
        </Typography>
        <Typography
          sx={{
            fontFamily: "JetBrains Mono Variable, monospace",
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: { xs: "0.7rem", md: "0.95rem" },
          }}
        >
          A selection of my recent work and contributions
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: { xs: 1, md: 2 },
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
