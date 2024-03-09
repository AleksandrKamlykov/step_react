import { Pictire } from "./Picture";
import "./gallery.css";

export const Gallery = ({ gallery }) => {
  if (gallery?.length < 1) {
    return <h3>No Data ...</h3>;
  }

  return (
    <div className="gallery-wrapper">
      {gallery?.map((item, index) => (
        <Pictire key={index} picture={item} />
      ))}
    </div>
  );
};
