import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import endPoint from "../services/endPoint";
import request from "../services/request";
import InputField from "./InputField";

const initRepresentant = {
  nom: "",
  prenom: "",
  numero_cni: "",
  telephone: "",
  email: "",
  dateNaissance: "",
  lieuxResidance: "",
  lieuxNaissance: "",
};
const initEntreprise = {
  nom: "",
  adresse: "",
  telephone: "",
  raison_sociale: "",
  status: "",
  sige_social: "",
  capital_social: "",
  date_enregistrement: "",
  numero_enregistrement: "",
  lieu_inscription_commerce: "",
  numero_employeur_cnss: "",
  categorie: "",
  attestation_capacite_financiere: "",
  ville: "",
  region: "",
};

const initEmploye = {
  numero_cni: "",
  nom: "",
  prenom: "",
  fonction: "",
  niveau: "",
  diplome: "",
  status: "",
  telephone: "",
  email: "",
  dateNaissance: "",
  lieuxResidance: "",
  lieuxNaissance: "",
};

const initMateriel = {
  numero: "",
  immatriculation: "",
  libele: "",
};

const initData = {
  typeAgrement: "",
  representant: "",
  entreprise: "",
  employer: "",
  employers: [],
  materiel: "",
  materiels: [],
};

const EntrepriseForm = ({ step, setStep }) => {
  const [entreprise, setEntreprise] = useState(initEntreprise);
  const [employe, setEmploye] = useState(initEmploye);
  const [materiel, setMateriel] = useState(initMateriel);
  const [representant, setRepresentant] = useState(initRepresentant);
  const [listCategorie, setListCategorie] = useState([]);
  const [data, setData] = useState(initData);
  const [compteur, setCompteur] = useState({
    materiel: 0,
    employe: 0,
  });
  const agrements = [
    "Agréments  techniques en bâtiment",
    "Agréments pour l’exercice des missions d’ingénierie du bâtiment ",
    "Agréments  pour l’exercice de la profession d’urbaniste ",
    "Agréments  pour l’exercice de la mission d’expertise immobilière ",
    "Agréments  pour l’exercice de l’activité de la promotion immobilière ",
    "Agréments  pour l’exercice de la profession de géomètre expert ",
    "Agréments  techniques d’exercice de la profession d'architecture",
  ];

  useEffect(() => {
    get();
  }, []);
  const get = () => {
    request
      .get(endPoint.categories)
      .then((res) => {
        setListCategorie(res.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postDemande = (e) => {
    e.preventDefault()
    console.log({
      typeAgrement: data.typeAgrement,
      representant: representant,
      entreprise: entreprise,
      employers: data.employers,
      materiels: data.materiels,
    })
    request
      .post(endPoint.demandes,{
        typeAgrement: data.typeAgrement,
        representant: representant,
        entreprise: entreprise,
        employers: data.employers,
        materiels: data.materiels,
      })
      .then((res) => {
        alert(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onchange = (name, value) => {
    console.log(name, value);
    if (step <= 1) {
      if (name === "typeAgrement") {
        setData({
          ...data,
          [name]: value,
        });
        return;
      }
      setEntreprise({
        ...entreprise,
        [name]: value,
      });
    }
    if (step === 2) {
      setMateriel({
        ...materiel,
        [name]: value,
      });
    }

    if (step === 3) {
      setRepresentant({
        ...representant,
        [name]: value,
      });
    }

    if (step === 4) {
      setEmploye({
        ...employe,
        [name]: value,
      });
    }

    console.log(employe);
  };

  const addMateriel = (e) => {
    e.preventDefault();
    if (dataIsValide("materiel")) {
      data.materiels.push(materiel);
      setCompteur({
        ...compteur,
        "materiel": compteur.materiel + 1,
      });
      setMateriel(initMateriel);
    }
    console.log(data);
  };
  const addEmploye = (e) => {
    e.preventDefault();
    if (dataIsValide("employe")) {
      data.employers.push(employe);
      setCompteur({
        ...compteur,
        "employe": compteur.employe + 1,
      });
      setEmploye(initEmploye);
    }
    console.log(data);
  };

  const dataIsValide = (type) =>{
    if(type === "materiel"){
      return materiel.libele !== "" &&
      materiel.immatriculation !== "" &&
      materiel.numero !== ""
    }

    if(type === "employe"){
      return employe.nom !=="" &&
      employe.prenom !=="" &&
      employe.fonction !=="" &&
      employe.niveau !=="" &&
      employe.diplome !=="" &&
      employe.status !=="" &&
      employe.email !=="" &&
      employe.dateNaissance !=="" &&
      employe.lieuxNaissance !=="" &&
      employe.lieuxResidance !=="" &&
      employe.numero_cni !==""
    }
  }
  return (
    <>
      {
        // formulaire entreprise
        step === 0 && (
          <>
            <InputField
              type={"text"}
              label="Nom de l'entreprise"
              name={"nom"}
              value={entreprise.nom}
              onChange={onchange}
            />

            <InputField
              type={"text"}
              label="Raison social"
              name={"raison_sociale"}
              value={entreprise.raison_sociale}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Siege social"
              name={"sige_social"}
              value={entreprise.sige_social}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Adresse"
              name={"adresse"}
              value={entreprise.adresse}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Téléphone"
              name={"telephone"}
              value={entreprise.telephone}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Status"
              name={"status"}
              value={entreprise.status}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Capital social"
              name={"capital_social"}
              value={entreprise.capital_social}
              onChange={onchange}
            />
          </>
        )
      }

      {
        // formulaire entreprise
        step === 1 && (
          <>
            <InputField
              type={"date"}
              label="Date d'enregistrement"
              name={"date_enregistrement"}
              value={entreprise.date_enregistrement}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Lieu d'incription au registre de commerce"
              name={"lieu_inscription_commerce"}
              value={entreprise.lieu_inscription_commerce}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Numéro d'enregistrement"
              name={"numero_enregistrement"}
              value={entreprise.numero_enregistrement}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Numéro employeur CNSS"
              name={"numero_employeur_cnss"}
              value={entreprise.numero_employeur_cnss}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Attestation capacité financière"
              name={"attestation_capacite_financiere"}
              value={entreprise.attestation_capacite_financiere}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Region"
              name={"region"}
              value={entreprise.region}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Ville"
              name={"ville"}
              value={entreprise.ville}
              onChange={onchange}
            />

            <InputField
              type={"select2"}
              label="categorie"
              name={"categorie"}
              value={entreprise.categorie}
              onChange={onchange}
              options={listCategorie}
            />
            <hr />
            <p className="m-0 text-center fw-bold">
              Choisissiez le type d'agrément pour votre entreprise
            </p>
            <InputField
              type={"select"}
              label="categorie"
              name={"typeAgrement"}
              value={data.typeAgrement}
              onChange={onchange}
              options={agrements}
            />
          </>
        )
      }

      {
        // formulaire materiel
        step === 2 && (
          <>
            <div className="d-flex">
              <div className="me-auto">
                Nombre de materiel ajouté:{" "}
                <span className="fw-bold">{compteur.materiel}</span>
              </div>
              <div className="btn-group">
                <button className="btn btn-primary me-2">Voir</button>
                <button className="btn btn-primary me-2" onClick={addMateriel}>
                  Ajouter
                </button>
              </div>
            </div>
            <InputField
              type={"text"}
              label="Numéro"
              name={"numero"}
              value={materiel.numero}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Immatriculation"
              name={"immatriculation"}
              value={materiel.immatriculation}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="libelle"
              name={"libele"}
              value={materiel.libele}
              onChange={onchange}
            />
          </>
        )
      }

      {
        // formulaire representant légale
        step === 3 && (
          <>
            <InputField
              type={"text"}
              label="Nom"
              name={"nom"}
              value={representant.nom}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Prénom"
              name={"prenom"}
              value={representant.prenom}
              onChange={onchange}
            />
            <InputField
              type={"date"}
              label="Date de naissance"
              name={"dateNaissance"}
              value={representant.dateNaissance}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Lieu de naissance"
              name={"lieuxNaissance"}
              value={representant.lieuxNaissance}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Lieu de residance"
              name={"lieuxResidance"}
              value={representant.lieuxResidance}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Numéro CNIB"
              name={"numero_cni"}
              value={representant.numero_cni}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Téléphone"
              name={"telephone"}
              value={representant.telephone}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Email"
              name={"email"}
              value={representant.email}
              onChange={onchange}
            />
          </>
        )
      }

      {
        // formulaire employer
        step === 4 && (
          <>
            <div className="d-flex">
              <div className="me-auto">
                Nombre d'employé ajouté:{" "}
                <span className="fw-bold">{compteur.employe}</span>
              </div>
              <div className="btn-group">
                <button className="btn btn-primary me-2">Voir</button>
                <button className="btn btn-primary me-2" onClick={addEmploye}>
                  Ajouter
                </button>
              </div>
            </div>
            <InputField
              type={"text"}
              label="Nom"
              name={"nom"}
              value={employe.nom}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Prénom"
              name={"prenom"}
              value={employe.prenom}
              onChange={onchange}
            />
            <InputField
              type={"date"}
              label="Date de naissance"
              name={"dateNaissance"}
              value={employe.dateNaissance}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Lieu de naissance"
              name={"lieuxNaissance"}
              value={employe.lieuxNaissance}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Lieu de residance"
              name={"lieuxResidance"}
              value={employe.lieuxResidance}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Numéro CNIB"
              name={"numero_cni"}
              value={employe.numero_cni}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Téléphone"
              name={"telephone"}
              value={employe.telephone}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Email"
              name={"email"}
              value={employe.email}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Fonction"
              name={"fonction"}
              value={employe.fonction}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Niveau"
              name={"niveau"}
              value={employe.niveau}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Diplome"
              name={"diplome"}
              value={employe.diplome}
              onChange={onchange}
            />
            <InputField
              type={"text"}
              label="Status"
              name={"status"}
              value={employe.status}
              onChange={onchange}
            />
          </>
        )
      }
      <div className="d-flex justify-content-center">
        {step === 0 ? (
          <Link to={"/"}>
            <button className="btn btn-danger mx-1">Annuler</button>
          </Link>
        ) : (
          <>
            <button
              className="btn btn-primary mx-1"
              onClick={(e) => {
                e.preventDefault();
                if (step - 1 >= 0) {
                  setStep(step - 1);
                }
              }}
            >
              precedent
            </button>
          </>
        )}
        <>
          {step <= 3 && (
            <button
              className="btn btn-primary mx-1"
              onClick={(e) => {
                e.preventDefault();
                if (step + 1 <= 4) {
                  setStep(step + 1);
                }
              }}
            >
              Suivant
            </button>
          )}
          {step + 1 > 4 && (
            <button
              className="btn btn-success mx-1"
              onClick={postDemande}
            >
              Terminer
            </button>
          )}
        </>
      </div>
    </>
  );
};

export default EntrepriseForm;
