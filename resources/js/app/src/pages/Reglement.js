import React, { useState } from "react";
import edit from "../assets/images/icons/edit.png";
import PageHeader from "../Components/PageHeader";
import Table from "../Components/Table";
import TableContent from "../Components/TableContent";
import TableHeader from "../Components/TableHeader";

const Reglement = () => {
  const [datas, setDatas] = useState([...Array(12).keys()]);
  return (
    <>
      <PageHeader title="Textes règlementaires" />
      {/*<Table>
        <TableHeader>
          <th scope="col" className="border-raduis-left">
            #
          </th>
          <th scope="col">Code produit</th>
          <th scope="col">Produit</th>
          <th scope="col">Prix</th>
          <th scope="col">Quantité</th>
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
                <td>PX-001</td>
                <td>
                  <div className="d-inline-block me-2">
                    <img
                      width="80px"
                      height="80px"
                      className="rounded-circle"
                      src={`https://source.unsplash.com/random/800x600/?product=${idx}`}
                      alt=""
                    />
                  </div>
                  <div className="d-inline-block align-middle">
                    <span className="fw-bold">Nom produits</span> <br />
                    <span className="fw-14">categorie</span>
                  </div>
                </td>
                <td>1000 FCFA</td>
                <td>100 kg</td>
                <td className="text-center">
                  <div className="btn-group">
                    <div className="d-inline-block mx-1">
                      <button className="btn btn-gray">
                        <img src={edit} alt="" />
                        <span> Voir</span>
                      </button>
                    </div>
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
      </Table>*/}
    </>
  );
};

export default Reglement;
