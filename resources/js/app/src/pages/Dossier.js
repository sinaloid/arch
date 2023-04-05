import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/armoiries.png";
import EntrepriseForm from "../Components/EntrepriseForm";
import Container from "./Container";

const Dossier = () => {
  const [step, setStep] = useState(0);
  return (
    <Container
      title={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor velit, ornare at lobortis vitae"
      }
    >
      <div className="col-12 col-md-8 mx-auto py-5">
        <div className="row row-cols-4 my-4">
          <div className="col ">
            <p>1. INFORMATION DE VOTRE ENTREPRISE</p>
            <div className={step >= 0 ? "w-100 border-bottom-primary" : "w-100 border-bottom-gray"}></div>
          </div>
          <div className="col ">
            <p>2. INFORMATIONS SUR LE MATERIEL</p>
            <div className={step >= 2 ? "w-100 border-bottom-primary" : "w-100 border-bottom-gray"}></div>
          </div>
          <div className="col">
            <p>3. INFORMATIONS SUR LE REPRESENTANT LEGALE</p>
            <div className={step >= 3 ? "w-100 border-bottom-primary" : "w-100 border-bottom-gray"}></div>
          </div>
          <div className="col">
            <p>4. INFORMATIONS SUR LES EMPLOYERS</p>
            <div className={step >= 4 ? "w-100 border-bottom-primary" : "w-100 border-bottom-gray"}></div>
          </div>
        </div>
        <div className="card p-3">
          <div className="row g-3">
            <EntrepriseForm 
              step={step}
              setStep={setStep}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dossier;
