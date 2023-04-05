import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/armoiries.png";

const Container = ({children, title, withButton = false}) => {
  const datas = [
    {
      title: "Arrêté conjoint N°2016-040/MDENP/MINEFID du 10 novembre 2016",
      desc: "portant fixation des conditions d'octroi, de renouvellement et de retrait de l'agrément technique en matière informatique",
    },
    {
      title: "Arrêté conjoint N°2016-040/MDENP/MINEFID du 10 novembre 2016",
      desc: "portant fixation des conditions d'octroi, de renouvellement et de retrait de l'agrément technique en matière informatique",
    },
    {
      title: "Arrêté conjoint N°2016-040/MDENP/MINEFID du 10 novembre 2016",
      desc: "portant fixation des conditions d'octroi, de renouvellement et de retrait de l'agrément technique en matière informatique",
    },
  ];
  return (
    <>
    <div className="row bg-white pt-2 pb-5">
    <div className="col-12 col-md-12 mx-auto">
          <div className="d-flex">
            <div className="me-auto d-flex align-items-center1 ">
              <div>
                <img width="100px" src={logo} alt="" />
              </div>
              <div className="fw-bold">
                <span className="display-5 fw-bold">Burkina Faso</span>
                <br />
                <span className="">01 BP 5175 Ouagadougou 01</span> <br />
                <span>www.dgtic.mdenp.gov.bf</span>
                <br />
              </div>
            </div>
            <div className="fw-bold text-end">
              <span>dgtic.mdenp@tic.gov.bf</span>
              <br />
              <span>+226 25 49 00 23</span>
              <br />
              <span>+226 06 00 02 02</span> <br />
            </div>
          </div>
        </div>
        <div className="col-12">
          <p className="fw-bold text-primary display-5 text-center text-uppercase">
            Ministère de l'Urbanisme, des Affaires Foncières et de l'Habitat
          </p>
          <div className="col-5 mx-auto">
            <p className="fw-bold text-primary text-center">
              MINISTERE DE LA TRANSITION DIGITALE, DES POSTES ET DES
              COMMUNICATIONS ELECTRONIQUES
            </p>
            {withButton && <div className="d-flex justify-content-center">
              <Link to={"/demande"}><button className="btn btn-primary">Soumettre un dossier</button></Link>
            </div>}
          </div>
        </div>
    </div>
      <div className="row">
        <div className="col-12 bg-primary mb-5">
          <p className="text-center">
            {
                title
            }
          </p>
        </div>
        {
            children
        }
        <div className="col-12 bg-dark py-2 mt-5">
          <p className="text-center p-0 m-0">
            <img width="50px" src={logo} alt="" />
          </p>
          <p className="text-center p-0 m-0 fw-bold text-white">
            Unités - Progrès - Justice
          </p>
        </div>
      </div>
    </>
  );
};

export default Container;
