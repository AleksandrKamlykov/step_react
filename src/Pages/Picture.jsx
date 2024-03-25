import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Picture = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state, pathname } = useLocation();

  if (!id) {
    navigate(-1);
  }
  const [image, setImage] = useState(state ?? null);

  useEffect(() => {
    navigate(pathname, { replace: true, state: {} });
  }, []);

  return (
    <div>
      <div className="modal-content">
        <hr />
        <p>Author: {image?.user}</p>
        <p>Views: {image?.views}</p>
        <p>Likes: {image?.likes}</p>
        <p>Downloads: {image?.downloads}</p>
        <div>
          <a
            href={image?.largeImageURL}
            download={`${image?.type}_${image?.id}`}
            onClick={(e) => download(e)}
          >
            Download
          </a>
        </div>
        <img src={image?.largeImageURL} alt="" />
      </div>
    </div>
  );
};
