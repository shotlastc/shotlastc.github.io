import AboutMeSlide from "./AboutMeSlide";
import SkillsSlide from "./SkillsSlide";
import ProjectsSlide from "./ProjectsSlide";

interface SlideContentProps {
  index: number;
}

export default function SlideContent({ index }: SlideContentProps) {
  switch (index) {
    case 0:
      return <AboutMeSlide />;
    case 1:
      return <SkillsSlide />;
    case 2:
      return <ProjectsSlide />;
    case 3:
      return <></>;
    default:
      return null;
  }
}
