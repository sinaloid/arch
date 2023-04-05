import React from "react";
import dossier from "../assets/images/files-icon.png";
import edit from "../assets/images/icons/edit.png";
import Table from "../Components/Table";
import TableContent from "../Components/TableContent";
import TableHeader from "../Components/TableHeader";
import { ViewChart } from "../Components/ViewChart";

const Home = () => {
  return (
    <>
      <div className="row">
        <h1 className="h2">Accueil</h1>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-md-6 border">
          <p className="text-center fw-bold pt-3">
            Liste des nouvelles occupants
          </p>
          <Table>
            <TableHeader>
              <th scope="col" className="border-raduis-left">
                #
              </th>
              <th scope="col">Image</th>
              <th scope="col">Nom Prénom</th>
              <th scope="col" className="text-center">
                Actions
              </th>
            </TableHeader>
            <TableContent>
              {[...Array(4).keys()].map((data, idx) => {
                return (
                  <tr key={idx}>
                    <td>
                      <input type="checkbox" value="selected" />
                    </td>
                    <td className="fw-bold">
                      <img
                        width="40px"
                        height="40px"
                        className="rounded-circle"
                        src={`https://source.unsplash.com/random/800x600/?product=${idx}`}
                        alt=""
                      />
                    </td>
                    <td className="fw-bold">Sawadogo Joel</td>
                    <td className="text-center">
                      <div className="btn-group">
                        <div className="d-inline-block mx-1">
                          <button className="btn btn-primary-light">
                            <img src={edit} alt="" />
                            <span> Voir</span>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </TableContent>
          </Table>
        </div>
        <div className="col-12 col-md-6">
          <div className="row row-cols-1 row-cols-sm-2">
            {[
              "Nombre total des maisons",
              "Maisons occupées",
              "Maisons disponible",
              "Revenue totale"
            ].map((data, idx) => {
              return (
                <div className="col mb-5" key={idx}>
                  <div className="card btn-secondary">
                    <div className="d-flex align-items-center">
                      <div className="me-1">
                        <img width="80px" src={dossier} alt="" />
                      </div>
                      <div className="text-center">
                        <h6 className="text-16 fw-bold">{data}</h6>
                        <span>145</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ViewChart title="Evolution des demande en fonction des catégorie d'entreprise"/>
        </div>
      </div>
    </>
  );
};

export default Home;
