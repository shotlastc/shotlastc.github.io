import { useState, useRef, useEffect } from "react";

type Direction = "vertical" | "horizontal";

export function usePageScroll(
  pages: number,
  direction: Direction = "vertical",
) {
  const [activePage, setActivePage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToPage = (index: number) => {
    if (!scrollRef.current) return;

    const pageSize =
      direction === "vertical"
        ? scrollRef.current.clientHeight
        : scrollRef.current.clientWidth;

    scrollRef.current.scrollTo({
      top: direction === "vertical" ? index * pageSize : undefined,
      left: direction === "horizontal" ? index * pageSize : undefined,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const scrollPos =
        direction === "vertical"
          ? scrollRef.current.scrollTop
          : scrollRef.current.scrollLeft;

      const pageSize =
        direction === "vertical"
          ? scrollRef.current.clientHeight
          : scrollRef.current.clientWidth;

      const newActivePage = Math.round(scrollPos / pageSize);
      setActivePage(Math.min(newActivePage, pages - 1));
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (direction === "vertical" && event.key === "ArrowUp") ||
        (direction === "horizontal" && event.key === "ArrowLeft")
      ) {
        event.preventDefault();
        scrollToPage(Math.max(0, activePage - 1));
      } else if (
        (direction === "vertical" && event.key === "ArrowDown") ||
        (direction === "horizontal" && event.key === "ArrowRight")
      ) {
        event.preventDefault();
        scrollToPage(Math.min(pages - 1, activePage + 1));
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) scrollElement.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (scrollElement)
        scrollElement.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePage, pages, direction]);

  return { activePage, scrollRef, scrollToPage };
}
