import { useState, useRef, useEffect } from "react";

export function usePageScroll(pages: number) {
  const [activePage, setActivePage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToPage = (index: number) => {
    if (scrollRef.current) {
      const pageHeight = scrollRef.current.clientHeight;
      scrollRef.current.scrollTo({
        top: index * pageHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollTop = scrollRef.current.scrollTop;
        const pageHeight = scrollRef.current.clientHeight;
        const newActivePage = Math.round(scrollTop / pageHeight);
        setActivePage(Math.min(newActivePage, pages - 1));
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        scrollToPage(Math.max(0, activePage - 1));
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        scrollToPage(Math.min(pages - 1, activePage + 1));
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePage, pages]);

  return { activePage, scrollRef, scrollToPage };
}
