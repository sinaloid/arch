import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import pf from "./assets/images/icons/profile.png";
import msg from "./assets/imgs/msg.png";
import supp from "./assets/imgs/supp.png";
import user from "./assets/imgs/user.png";
import home from "./assets/imgs/home.png";
import employe from "./assets/imgs/employe.png";
import rendv from "./assets/imgs/rendezvous.png";
import agenda from "./assets/imgs/agenda.png";
import patient from "./assets/imgs/patient.png";
import profile from "./assets/images/armoiries.png"
import Categorie from "./pages/Categorie";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { deleteUser } from "./services/storage";
import { AppContext, initialUser } from "./services/context";
import Demande from "./pages/Demande";
import Reglement from "./pages/Reglement";

const Dashboard = () => {
  const authCtx = useContext(AppContext);
  const { user, onUserChange } = authCtx;
  const navigate = useNavigate();

  useEffect(() => {
    //return navigate("/dashboard/")
    isAuth();
  }, [user]);
  const isAuth = () => {
    if (user.isAuth == false || user.token == null || user.token == "") {
      console.log(`connexion échoué, isAuth`);
      console.log(user);

      //return navigate("/");
    } else {
      console.log("isAuth true");
    }
  };

  const deconnect = () => {
    deleteUser();
    onUserChange(initialUser);
  };
  return (
    <>
      <header className="container-fluid navbar navbar-dark bg-white sticky-top flex-md-nowrap px-0 py-4 shadow1 d-md-none">
        <a
          className="navbar-brand1 bg-white col-md-3 col-lg-2 me-0 px-3"
          href="#"
        >
          <img width="20px" src={profile} alt="" />
        </a>
        <button
          className="navbar-toggler p-2 position-absolute mx-0 my-4 d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </header>

      <div className="container-fluid bg-white">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-1 col-lg-2 d-md-block bg-white sidebar collapse p-0"
          >
            <div className="position-sticky h-100 text-small">
              <div className="col-12 d-none d-md-block text-center py-5 m-0">
                <img width="100px" src={profile} alt="" />
              </div>
              <div className="d-md-none py-2"></div>
              <ul className="nav flex-column">
                <li className="nav-item my-1 px-2">
                  <NavLink
                    to="/dashboard/"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active btn btn-primary border rounded-2 mx-auto py-0 text-start pt-1"
                        : "btn nav-link border-0 py-0 btn-secondary text-start pt-1"
                    }
                  >
                    <span className="d-none d-md-block d-lg-none wd-0">
                      <img src={home} alt="" />
                    </span>
                    <span
                      className="d-block d-md-none d-lg-block wd-80"
                      data-bs-toggle="collapse"
                      data-bs-target="#sidebarMenu.show"
                    >
                      Accueil
                    </span>
                  </NavLink>
                </li>
                
                <li className="nav-item my-1 px-2">
                  <NavLink
                    to="/dashboard/categorie"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active btn btn-primary border rounded-2 mx-auto py-0 text-start pt-1"
                        : "btn nav-link border-0 py-0 btn-secondary text-start pt-1"
                    }
                  >
                    <span className="d-none d-md-block d-lg-none wd-0">
                      <img src={employe} alt="" />
                    </span>
                    <span
                      className="d-block d-md-none d-lg-block wd-80"
                      data-bs-toggle="collapse"
                      data-bs-target="#sidebarMenu.show"
                    >
                      Catégorie
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item my-1 px-2">
                  <NavLink
                    to="/dashboard/demande"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active btn btn-primary border rounded-2 mx-auto py-0 text-start pt-1"
                        : "btn nav-link border-0 py-0 btn-secondary text-start pt-1"
                    }
                  >
                    <span className="d-none d-md-block d-lg-none wd-0">
                      <img src={employe} alt="" />
                    </span>
                    <span
                      className="d-block d-md-none d-lg-block wd-80"
                      data-bs-toggle="collapse"
                      data-bs-target="#sidebarMenu.show"
                    >
                      Demandes d'agrement
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item my-1 px-2">
                  <NavLink
                    to="/dashboard/text-reglementaire"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active btn btn-primary border rounded-2 mx-auto py-0 text-start pt-1"
                        : "btn nav-link border-0 py-0 btn-secondary text-start pt-1"
                    }
                  >
                    <span className="d-none d-md-block d-lg-none wd-0">
                      <img src={rendv} alt="" />
                    </span>
                    <span
                      className="d-block d-md-none d-lg-block wd-80 p-0 m-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#sidebarMenu.show"
                    >
                      Tutorial
                    </span>
                  </NavLink>
                </li>
                {/*<li className="nav-item my-1 px-2">
                  <NavLink
                    to="/dashboard/agenda"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active btn btn-primary border rounded-2 mx-auto py-0 text-start pt-1"
                        : "btn nav-link border-0 py-0 btn-secondary text-start pt-1"
                    }
                  >
                    <span className="d-none d-md-block d-lg-none wd-0">
                      <img src={agenda} alt="" />
                    </span>
                    <span
                      className="d-block d-md-none d-lg-block wd-80 p-0 m-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#sidebarMenu.show"
                    >
                      Commandes
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item my-1 px-2">
                  <NavLink
                    to="/dashboard/patient"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active btn btn-primary border rounded-2 mx-auto py-0 text-start pt-1"
                        : "btn nav-link border-0 py-0 btn-secondary text-start pt-1"
                    }
                  >
                    <span className="d-none d-md-block d-lg-none wd-0">
                      <img src={patient} alt="" />
                    </span>
                    <span
                      className="d-block d-md-none d-lg-block wd-80 p-0 m-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#sidebarMenu.show"
                    >
                      Clients
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item my-1 px-2">
                  <NavLink
                    to="/dashboard/livreur"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active btn btn-primary border rounded-2 mx-auto py-0 text-start pt-1"
                        : "btn nav-link border-0 py-0 btn-secondary text-start pt-1"
                    }
                  >
                    <span className="d-none d-md-block d-lg-none wd-0">
                      <img src={agenda} alt="" />
                    </span>
                    <span
                      className="d-block d-md-none d-lg-block wd-80 p-0 m-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#sidebarMenu.show"
                    >
                      Livreurs
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item my-1 px-2">
                  <NavLink
                    to="/dashboard/fourniseur"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active btn btn-primary border rounded-2 mx-auto py-0 text-start pt-1"
                        : "btn nav-link border-0 py-0 btn-secondary text-start pt-1"
                    }
                  >
                    <span className="d-none d-md-block d-lg-none wd-0">
                      <img src={agenda} alt="" />
                    </span>
                    <span
                      className="d-block d-md-none d-lg-block wd-80 p-0 m-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#sidebarMenu.show"
                    >
                      Fourniseurs
                    </span>
                  </NavLink>
                </li>*/}
                <li className="nav-item my-1 px-2">
                  <NavLink
                    to="/dashboard/admin"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active btn btn-primary border rounded-2 mx-auto py-0 text-start pt-1"
                        : "btn nav-link border-0 py-0 btn-secondary text-start pt-1"
                    }
                  >
                    <span className="d-none d-md-block d-lg-none wd-0">
                      <img src={agenda} alt="" />
                    </span>
                    <span
                      className="d-block d-md-none d-lg-block wd-80 p-0 m-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#sidebarMenu.show"
                    >
                      Administrateurs
                    </span>
                  </NavLink>
                </li>
              </ul>

              <ul className="nav flex-column w-100 position-absolute bottom-0 mb-2">
                <li className="nav-item my-1 px-2">
                  <NavLink
                    to="/dashboard/parametre"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active btn btn-primary border rounded-2 mx-auto py-0 text-start pt-1"
                        : "btn nav-link border py-0 btn-secondary text-start pt-1"
                    }
                  >
                    <span className="d-none d-md-block d-lg-none wd-0">
                      <img src={supp} alt="" />
                    </span>
                    <span className="d-block d-md-none d-lg-block wd-80">
                      <span className="d-inline-block">
                        Paramètres du compte
                      </span>
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item my-1 px-2">
                  <span 
                    className="btn nav-link border-0 py-0 btn-danger text-start pt-1"
                    onClick={deconnect}
                    >
                    Se déconnecter
                  </span>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-11 ms-sm-auto col-lg-10 px-md-4 pt-5 h-90 text-small">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/demande" element={<Demande />} />
              <Route path="/categorie" element={<Categorie />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/parametre" element={<Settings />} />
              <Route path="/text-reglementaire" element={<Reglement />} />
            </Routes>
          </main>
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="text-small d-inline-block my-4 me-4">
              Copyright © 2022 Nom société
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
