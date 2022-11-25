import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./Scroll.css";

const Scroll = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { pathname } = useLocation();
  const scrollStyle = () => {
    switch (pathname) {
      case "/Japon":
        return `rgba(188, 0, 45, 0.85 )`;
      case "/Italie":
        return `rgba(147, 68, 255, 0.85 )`;
      case "/Voyage":
        return `rgba(137, 196, 244, 0.85 )`;
      default:
        return `blue`;
    }
  };

  return (
    <div className="scroll_page">
      <div className>
        <button
          className="scroll_button"
          style={{ backgroundColor: scrollStyle() }}
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          ↑
        </button>
      </div>
    </div>
  );
};

export default Scroll;
