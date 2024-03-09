import "./banner.css";

export const Banner = ({ children }) => {
  return (
    <div className={"banner-wrapper"}>
      <picture>
        <source
          srcSet="https://cdn.pixabay.com/index/2024/03/08/05-25-20-210_1920x550.jpg"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="https://cdn.pixabay.com/index/2024/03/08/05-25-20-210_640.jpg"
          media="(max-width: 640px)"
        />
        <img
          src="https://cdn.pixabay.com/index/2024/03/08/05-25-20-210_1440x550.jpg"
          className="imageBanner"
          alt="Free mixed hero backgrounds"
        />
      </picture>
      <div className="banner-content">{children}</div>
    </div>
  );
};
