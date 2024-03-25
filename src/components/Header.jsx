import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={"app-header"}>
      <Link to={"/"} className="logo">
        Pixabay
      </Link>
      <div className="menu">
        <button>Explore</button>
        <div className="accout"></div>
        <button>Upload</button>
      </div>
    </header>
  );
};
