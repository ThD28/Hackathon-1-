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
      case "/":
        return `rgba(102, 98, 120, 0.85)`;
      case "/Japon":
        return `rgba(188, 0, 45, 0.85 )`;
      case "/Italie":
        return `rgba(48, 211, 0, 0.85)`;
      case "/Voyage":
        return `rgba(137, 196, 244, 0.85 )`;
      case "/France":
        return `rgba(0, 33, 83, 0.85)`;
      case "/Brasil":
        return `rgba(230, 241, 0, 0.85)`;
      default:
        return `blue`;
    }
  };

  const scroolShow = () => {
    switch (pathname) {
      case "/":
        return "none";
      default:
        return "block";
    }
  };

  return (
    <div className="scroll_page">
      <div className>
        <button
          className="scroll_button"
          style={{ backgroundColor: scrollStyle(), display: scroolShow() }}
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
