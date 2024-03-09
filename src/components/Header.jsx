import "./header.css";

export const Header = () => {
  return (
    <header className={"app-header"}>
      <a className="logo">Pixabay</a>
      <div className="menu">
        <button>Explore</button>
        <div className="accout"></div>
        <button>Upload</button>
      </div>
    </header>
  );
};
