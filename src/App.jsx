import "./App.css";
import { Header } from "./components/Header.jsx";
import { Banner } from "./components/Banner.jsx";
import { SearchInput } from "./components/SearchInput.jsx";
import { createContext, useContext, useEffect, useState } from "react";
import { Filter } from "./components/Filter.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Modal } from "./components/Modal.jsx";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.jsx";

const ModalContext = createContext({
  dataModal: null,
  hideModal: () => {},
  showModal: (data) => {},
});

const App = () => {
  const [dataModal, setModalData] = useState(null);

  const hideModal = () => {
    setModalData(null);
  };
  const showModal = (data) => {
    setModalData(data);
  };

  return (
    <ModalContext.Provider value={{ hideModal, dataModal, showModal }}>
      <Header />
      <Router />
    </ModalContext.Provider>
  );
};

export default App;
export const useModalData = () => useContext(ModalContext);
