import "./picture.css";

export const Pictire = ({ picture }) => {
  return (
    <div className="picture">
      <img src={picture.userImageURL} alt={picture.user} />
    </div>
  );
};
