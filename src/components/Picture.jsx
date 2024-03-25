import "./picture.css";
import { useModalData } from "../App.jsx";
import { Link } from "react-router-dom";

export const Pictire = ({ picture }) => {
  const { showModal } = useModalData();

  return (
    <Link to={`/picture/${picture.id}`} state={picture}>
      <div className="picture">
        <img src={picture.webformatURL} alt={picture.user} />
      </div>
    </Link>
  );
  // return (
  //   <div onClick={() => showModal(picture)} className="picture">
  //     <img src={picture.webformatURL} alt={picture.user} />
  //   </div>
  // );
};
