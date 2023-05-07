import { get } from "jquery";
import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import DetailMaison from "./sous-pages/DetailMaison";
import ListMaison from "./sous-pages/ListMaison";

const Maison = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListMaison />} />
        <Route path="/detail/:id" element={<DetailMaison />} />
      </Routes>
    </>
  );
};

export default Maison;
