import { useModalData } from "../App.jsx";
import "./modal.css";

const example = {
  id: 8595521,
  pageURL: "https://pixabay.com/photos/forsythia-flowers-branch-8595521/",
  type: "photo",
  tags: "forsythia, flowers, branch",
  previewURL:
    "https://cdn.pixabay.com/photo/2024/02/25/10/11/forsythia-8595521_150.jpg",
  previewWidth: 112,
  previewHeight: 150,
  webformatURL:
    "https://pixabay.com/get/g2b79e054e21ae705838d5a497e7db8b64f2d76d988883a930c086c7de39719a0f659520356b0ecdabd77abff11ea3f840101932d72d626e6d57dd7bfcd7d09da_640.jpg",
  webformatWidth: 480,
  webformatHeight: 640,
  largeImageURL:
    "https://pixabay.com/get/gc45d3f12a15ea2c861d9a3a17d9276653821d7e7a64b0296c59a70fff562cca2de034ae24f4145d1d07d5c3fc1561dbdba4b62c7b4f911c97140514677eb2291_1280.jpg",
  imageWidth: 3024,
  imageHeight: 4032,
  imageSize: 970371,
  views: 22082,
  downloads: 17344,
  collections: 178,
  likes: 1009,
  comments: 36,
  user_id: 10328767,
  user: "Mylene2401",
  userImageURL:
    "https://cdn.pixabay.com/user/2020/08/02/06-54-24-533_250x250.jpeg",
};

export const Modal = () => {
  const { dataModal, hideModal } = useModalData();
  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.id === "modal") {
      hideModal();
    }
  };

  return (
    <div
      id={"modal"}
      onClick={onClose}
      className={dataModal ? "backdoor" : "close"}
    >
      <div className="modal-content">
        <button onClick={hideModal}>close</button>
        <hr />
        <p>Author: {dataModal?.user}</p>
        <p>Views: {dataModal?.views}</p>
        <p>Likes: {dataModal?.likes}</p>
        <p>Downloads: {dataModal?.downloads}</p>
        <div>
          <a
            href={dataModal?.largeImageURL}
            download={`${dataModal?.type}_${dataModal?.id}`}
            onClick={(e) => download(e)}
          >
            Download
          </a>
        </div>
        <img src={dataModal?.webformatURL} alt="" />
      </div>
    </div>
  );
};
