import { Banner } from "../components/Banner.jsx";
import { SearchInput } from "../components/SearchInput.jsx";
import { Filter } from "../components/Filter.jsx";
import { Gallery } from "../components/Gallery.jsx";
import { Modal } from "../components/Modal.jsx";
import { useEffect, useState } from "react";
const API_KEY = "42763005-f134e9d84eb727dbee890a381";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [gallery, setGallery] = useState([]);

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
    setGallery(photos);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);
  const searchHandler = async () => {
    await fetchPhotos(searchValue);
  };

  return (
    <>
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
    </>
  );
};
