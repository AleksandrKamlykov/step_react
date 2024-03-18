import "./picture.css";
import { useModalData } from "../App.jsx";

export const Pictire = ({ picture }) => {
  const { showModal } = useModalData();

  return (
    <div onClick={() => showModal(picture)} className="picture">
      <img src={picture.webformatURL} alt={picture.user} />
    </div>
  );
};
