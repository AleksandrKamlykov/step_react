import "./App.css";
import { Header } from "./components/Header.jsx";
import { Banner } from "./components/Banner.jsx";
import { SearchInput } from "./components/SearchInput.jsx";
import { createContext, useContext, useEffect, useState } from "react";
import { Filter } from "./components/Filter.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Modal } from "./components/Modal.jsx";
const API_KEY = "42763005-f134e9d84eb727dbee890a381";

const ModalContext = createContext({
  dataModal: null,
  hideModal: () => {},
  showModal: (data) => {},
});

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [gallery, setGallery] = useState([]);

  const [dataModal, setModalData] = useState(null);

  const hideModal = () => {
    setModalData(null);
  };
  const showModal = (data) => {
    setModalData(data);
  };
  const fetchPhotos = async (category) => {
    const url = new URL("https://pixabay.com/api/");
    url.searchParams.set("key", API_KEY);

    if (category) {
      url.searchParams.set("q", category);
      // url.searchParams.set("category", category);
    }

    const photos = await fetch(url.href)
      .then((res) => res?.json())
      .then((res) => res?.hits ?? []);
    console.log(photos);
    setGallery(photos);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const searchHandler = async () => {
    await fetchPhotos(searchValue);
  };

  return (
    <ModalContext.Provider value={{ hideModal, dataModal, showModal }}>
      <Header />
      <Banner>
        <h2>Stunning royalty-free images & royalty-free stock</h2>
        <p>
          Over 4.4 million+ high quality stock images, videos and music shared
          by our talented community.
        </p>
        <SearchInput
          value={searchValue}
          handler={setSearchValue}
          onSearch={searchHandler}
        />
      </Banner>
      <Filter handler={setSearchValue} />
      <Gallery gallery={gallery} />
      <Modal />
    </ModalContext.Provider>
  );
};

export default App;
export const useModalData = () => useContext(ModalContext);
