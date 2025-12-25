import Box from "@mui/material/Box";
import Dither from "./components/Dither";
import DarkVeil from "./components/DarkVeil";
import SlideBox from "./components/SlideBox";
import SlideContent from "./components/SlideContent";
import PageNavigationDots from "./components/PageNavigationDots";
import NavigationButton from "./components/NavigationButton";
import { usePageScroll } from "./hooks/usePageScroll";
import "@fontsource-variable/jetbrains-mono/wght.css";

const PAGES = 4;

export default function App() {
  const { activePage, scrollRef, scrollToPage } = usePageScroll(PAGES);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "#121212",
      }}
    >
      {/* Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {/* <Dither
          waveColor={[0.15, 0.15, 0.15]}
          disableAnimation={false}
          enableMouseInteraction={false}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
          pixelSize={2}
        /> */}
        <DarkVeil />
      </Box>

      {/* Main Content Container */}
      <Box
        sx={{
          width: "70%",
          height: "70%",
          borderRadius: "20px",
          position: "relative",
          overflow: "hidden",
          pointerEvents: "none",
          backdropFilter: "blur(50px)",
        }}
      >
        {/* Scrollable Slides */}
        <Box
          ref={scrollRef}
          sx={{
            height: "100%",
            overflowY: "auto",
            scrollSnapType: "y mandatory",
            pointerEvents: "auto",
            alignSelf: "center",
            "&::-webkit-scrollbar": { display: "none" },
            position: "relative",
          }}
        >
          {[...Array(PAGES)].map((_, index) => (
            <SlideBox key={index}>
              <SlideContent index={index} />
            </SlideBox>
          ))}
        </Box>

        {/* Navigation Dots */}
        <PageNavigationDots
          pages={PAGES}
          activePage={activePage}
          onPageClick={scrollToPage}
        />

        {/* Back Button */}
        {activePage > 0 && (
          <NavigationButton
            position="top"
            onClick={() => scrollToPage(Math.max(0, activePage - 1))}
            text="↑ BACK"
          />
        )}

        {/* Scroll Button */}
        {activePage < PAGES - 1 && (
          <NavigationButton
            position="bottom"
            onClick={() => scrollToPage(Math.min(PAGES - 1, activePage + 1))}
            text="↓ SCROLL"
          />
        )}
      </Box>
    </Box>
  );
}
