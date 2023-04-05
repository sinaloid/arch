import React, { useState } from "react";
import edit from "../assets/images/icons/edit.png";
import PageHeader from "../Components/PageHeader";
import Table from "../Components/Table";
import TableContent from "../Components/TableContent";
import TableHeader from "../Components/TableHeader";

const Demande = () => {
  const [datas, setDatas] = useState([...Array(12).keys()]);
  return (
    <>
      <PageHeader title="Liste des demandes" />
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
          {datas.map((data, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <input type="checkbox" value="selected" />
                </td>
                <td className="fw-bold">
                  <img
                    width="80px"
                    height="80px"
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
                        <span> Modifier</span>
                      </button>
                    </div>
                    <div className="d-inline-block mx-1">
                      <button className="btn btn-danger">
                        <img src={edit} alt="" />
                        <span> Supprimer</span>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </TableContent>
      </Table>
      <div className="modal fade" id="newCategorie">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h4 className="modal-title text-meduim text-bold">
              Ajout d’une catégorie
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <form action="">
                <div className="mb-3 mt-3">
                  <label htmlFor="lname" className="form-label">
                  Nom de la catégorie
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    placeholder="Nom de la catégorie"
                    name="lname"
                  />
                </div>
                
              </form>
            </div>

            <div className="modal-footer d-flex justify-content-start border-0">
              <button
                type="reset"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Effacer
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Ajouter l’employé(e)
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demande;
