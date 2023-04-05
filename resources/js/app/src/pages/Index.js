import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/armoiries.png";
import Container from "./Container";

const Index = () => {
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
    <Container
      title={"Au cœur de la transformation digitale au Burkina Faso !"}
      withButton= {true}
    >
      <div className="col-8">
          <h2>TEXTES REGLEMENTAIRES</h2>
          <div className="border-top border-4">
            <div className="pt-3">
              {datas.map((data, idx) => {
                return (
                  <div className="mb-3" key={idx}>
                    <span className="fw-bold">{data.title}</span>
                    <p>{data.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="text-end">
            <h2>AGREMENTS</h2>
            <div className="border-top border-4">
              <Link className="text-decoration-none" to="#">
                Soumettre un dossier
              </Link>
              <br />
              <Link className="text-decoration-none" to="#">
                Soumettre un dossier
              </Link>
            </div>
          </div>
          <div className="text-end">
            <h2>LISTES</h2>
            <div className="border-top border-4">
              <Link className="text-decoration-none" to="#">
                Soumettre un dossier
              </Link>
              <br />
              <Link className="text-decoration-none" to="#">
                Soumettre un dossier
              </Link>
            </div>
          </div>
        </div>
    </Container>
  );
};

export default Index;
