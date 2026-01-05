import { Box, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";

interface SkillItemProps {
  name: string;
  category: string;
  delay: number;
}

function SkillItem({ name, category, delay }: SkillItemProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getCategoryColor = () => {
    switch (category) {
      case "languages":
        return "rgba(156, 39, 176, 0.6)"; // Purple
      case "frontend":
        return "rgba(33, 150, 243, 0.6)"; // Blue
      case "backend":
        return "rgba(76, 175, 80, 0.6)"; // Green
      case "hardware":
        return "rgba(244, 67, 54, 0.6)"; // Red
      case "tools":
        return "rgba(255, 152, 0, 0.6)"; // Orange
      default:
        return "rgba(255, 255, 255, 0.6)";
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        padding: "12px 20px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "12px",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "all 0.5s ease-out",
        overflow: "hidden",
        "&:hover": {
          background: "rgba(255, 255, 255, 0.1)",
          transform: "translateY(-2px)",
          boxShadow: `0 4px 12px ${getCategoryColor()}`,
        },
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          background: getCategoryColor(),
          borderRadius: "12px 0 0 12px",
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: "JetBrains Mono Variable, monospace",
          color: "white",
          fontSize: { xs: "0.85rem", md: "0.95rem" },
          fontWeight: 500,
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}

export default function SkillsSlide() {
  const skills = [
    // Languages
    { name: "C/C++", category: "languages" },
    { name: "Python", category: "languages" },
    { name: "TypeScript", category: "languages" },
    { name: "JavaScript", category: "languages" },
    { name: "HLSL/GLSL", category: "languages" },

    // Frontend
    { name: "React", category: "frontend" },
    { name: "Three.js", category: "frontend" },
    { name: "HTML/CSS", category: "frontend" },
    { name: "Material-UI", category: "frontend" },
    { name: "Chakra-UI", category: "frontend" },

    // Backend
    { name: "FastAPI", category: "backend" },
    { name: "Flask", category: "backend" },
    { name: "REST APIs", category: "backend" },
    { name: "PostgreSQL", category: "backend" },

    // Hardware
    { name: "KiCad", category: "hardware" },
    { name: "Fusion 360", category: "hardware" },
    { name: "Arduino", category: "hardware" },
    //{ name: "PCB Design", category: "hardware" },

    // Tools
    { name: "Docker", category: "tools" },
    { name: "Git", category: "tools" },
    { name: "Blender", category: "tools" },
  ];

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: { xs: 1, sm: 2, md: 4 },
        boxSizing: "border-box",
        maxWidth: { xs: "100vw" },
      }}
    >
      {/* Header */}
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
          Technical Arsenal
        </Typography>
        <Typography
          sx={{
            fontFamily: "JetBrains Mono Variable, monospace",
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: { xs: "0.7rem", md: "0.95rem" },
          }}
        >
          Tools and technologies I work with
        </Typography>
      </Box>

      {/* Legend */}
      <Stack
        direction="row"
        spacing={{ xs: 1, md: 2 }}
        useFlexGap
        sx={{ mb: { xs: 2, md: 3 }, flexWrap: "wrap" }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: { xs: 12, md: 16 },
              height: { xs: 12, md: 16 },
              background: "rgba(156, 39, 176, 0.6)",
              borderRadius: "4px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: { xs: "0.7rem", md: "0.85rem" },
            }}
          >
            Languages
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: { xs: 12, md: 16 },
              height: { xs: 12, md: 16 },
              background: "rgba(33, 150, 243, 0.6)",
              borderRadius: "4px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: { xs: "0.7rem", md: "0.85rem" },
            }}
          >
            Frontend
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: { xs: 12, md: 16 },
              height: { xs: 12, md: 16 },
              background: "rgba(76, 175, 80, 0.6)",
              borderRadius: "4px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: { xs: "0.7rem", md: "0.85rem" },
            }}
          >
            Backend
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: { xs: 12, md: 16 },
              height: { xs: 12, md: 16 },
              background: "rgba(244, 67, 54, 0.6)",
              borderRadius: "4px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: { xs: "0.7rem", md: "0.85rem" },
            }}
          >
            Hardware
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: { xs: 12, md: 16 },
              height: { xs: 12, md: 16 },
              background: "rgba(255, 152, 0, 0.6)",
              borderRadius: "4px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: { xs: "0.7rem", md: "0.85rem" },
            }}
          >
            Tools
          </Typography>
        </Box>
      </Stack>

      {/* Skills Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 1, md: 1.5 },
          flex: 1,
          alignContent: "start",
        }}
      >
        {skills.map((skill, index) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            category={skill.category}
            delay={index * 50}
          />
        ))}
      </Box>

      {/* Bottom Info */}
      <Box
        sx={{
          mb: { xs: 0, md: 2 },
          p: { xs: 1.5, md: 2 },
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: { xs: "10px", md: "12px" },
          background: "rgba(255, 255, 255, 0.03)",
        }}
      >
        <Typography
          sx={{
            fontFamily: "JetBrains Mono Variable, monospace",
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: { xs: "0.7rem", md: "0.85rem" },
            lineHeight: 1.6,
            textAlign: "center",
          }}
        >
          Full-stack development · 3D Graphics · Software & Hardware Engineering
        </Typography>
      </Box>
    </Box>
  );
}
