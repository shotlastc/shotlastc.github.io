import Box from "@mui/material/Box";
import DarkVeil from "./components/DarkVeil";
import SlideBox from "./components/SlideBox";
import SlideContent from "./components/SlideContent";
import PageNavigationDots from "./components/PageNavigationDots";
import NavigationButton from "./components/NavigationButton";
import { usePageScroll } from "./hooks/usePageScroll";
import "@fontsource-variable/jetbrains-mono/wght.css";
import { useRef, useState } from "react";

const PAGES = 4;

export default function App() {
  const mobile = typeof window !== "undefined" && window.innerWidth <= 600;
  const { activePage, scrollRef, scrollToPage } = usePageScroll(
    PAGES,
    mobile ? "horizontal" : "vertical",
  );
  const [mobilePage, setMobilePage] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0 && mobilePage < PAGES - 1) setMobilePage(mobilePage + 1);
      if (delta > 0 && mobilePage > 0) setMobilePage(mobilePage - 1);
    }
  };

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
        padding: { xs: 0, sm: 0 },
        overflow: "hidden",
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
        <DarkVeil />
      </Box>

      {/* Main Content Container */}
      {mobile ? (
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            overflow: "hidden",

            //touchAction: "pan-y pan-x",
            backdropFilter: "blur(50px)",
          }}
          // onTouchStart={handleTouchStart}
          // onTouchMove={handleTouchMove}
          // onTouchEnd={handleTouchEnd}
        >
          <Box
            ref={scrollRef}
            sx={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
              touchAction: "pan-y pan-x",
              "&::-webkit-scrollbar": { display: "none" },
              WebkitOverflowScrolling: "touch",
              //transform: `translateX(-${activePage * 100}vw)`,
              transition: "transform 0.4s cubic-bezier(.4,1.3,.6,1)",
              position: "relative",
            }}
          >
            {[...Array(PAGES)].map((_, index) => (
              <SlideBox
                key={index}
                sx={{
                  scrollSnapAlign: "start",
                  flexShrink: 0,
                  width: "100vw",
                  height: "100vh",
                }}
              >
                <SlideContent index={index} />
              </SlideBox>
            ))}
          </Box>
          {/* Dots for mobile navigation */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 16,
              display: "flex",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            {[...Array(PAGES)].map((_, idx) => (
              <Box
                key={idx}
                onClick={() => scrollToPage(idx)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background:
                    activePage === idx ? "white" : "rgba(255,255,255,0.3)",
                  mx: 0.7,
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              />
            ))}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: { xs: "100vw", sm: "90%", md: "70%" },
            height: { xs: "100vh", sm: "90%", md: "70%" },
            borderRadius: { xs: 0, sm: "18px", md: "20px" },
            overflow: "hidden",
            backdropFilter: "blur(50px)",
          }}
        >
          <Box
            ref={scrollRef}
            sx={{
              height: "100%",
              overflowY: "auto",
              scrollSnapType: "y mandatory",
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

          <PageNavigationDots
            pages={PAGES}
            activePage={activePage}
            onPageClick={scrollToPage}
          />

          {activePage > 0 && (
            <NavigationButton
              position="top"
              onClick={() => scrollToPage(Math.max(0, activePage - 1))}
              text="↑ BACK"
            />
          )}

          {activePage < PAGES - 1 && (
            <NavigationButton
              position="bottom"
              onClick={() => scrollToPage(Math.min(PAGES - 1, activePage + 1))}
              text="↓ SCROLL"
            />
          )}
        </Box>
      )}
    </Box>
  );
}
