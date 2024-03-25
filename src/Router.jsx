import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home.jsx";
import { Picture } from "./Pages/Picture.jsx";

export const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/picture/:id"} element={<Picture />} />
    </Routes>
  );
};
