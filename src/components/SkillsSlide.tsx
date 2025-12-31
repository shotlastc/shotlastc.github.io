import { Box, Typography, Stack, Chip } from "@mui/material";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <Box
      sx={{
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        p: 3,
        flex: 1,
        minWidth: "250px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: "JetBrains Mono Variable, monospace",
          fontWeight: 600,
          color: "white",
          mb: 2,
          fontSize: "1.1rem",
        }}
      >
        {title}
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            sx={{
              fontFamily: "JetBrains Mono Variable, monospace",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              fontSize: "0.85rem",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default function SkillsSlide() {
  const skillsData = {
    frontend: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Three.js"],
    backend: ["FastAPI", "Flask", "Python", "REST APIs"],
    languages: ["C/C++", "Python", "JavaScript", "HLSL/GLSL", "TypeScript"],
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        //justifyContent: "center",
        gap: 3,
        p: 4,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "JetBrains Mono Variable, monospace",
          fontWeight: 700,
          color: "white",
          mb: 2,
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        Technical Skills
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{
          width: "100%",
        }}
      >
        <SkillCategory title="Frontend" skills={skillsData.frontend} />
        <SkillCategory title="Backend" skills={skillsData.backend} />
        <SkillCategory title="Languages" skills={skillsData.languages} />
      </Stack>

      <Box
        sx={{
          mt: 3,
          p: 2,
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "12px",
          background: "rgba(255, 255, 255, 0.03)",
        }}
      >
        <Typography
          sx={{
            fontFamily: "JetBrains Mono Variable, monospace",
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "0.9rem",
            lineHeight: 1.6,
          }}
        >
          Specialized in creating interactive web experiences with modern
          frameworks, 3D graphics programming, and building scalable backend
          systems.
        </Typography>
      </Box>
    </Box>
  );
}
