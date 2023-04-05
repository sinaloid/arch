import { get } from "jquery";
import React, { useContext, useEffect, useState } from "react";
import edit from "../assets/images/icons/edit.png";
import ModalCategorie from "../Components/ModalCategorie";
import ModalSuppression from "../Components/ModalSuppression";
import PageHeader from "../Components/PageHeader";
import Table from "../Components/Table";
import TableContent from "../Components/TableContent";
import TableHeader from "../Components/TableHeader";
import { AppContext } from "../services/context";
import endPoint from "../services/endPoint";
import request from "../services/request";

const Categorie = () => {
  const [datas, setDatas] = useState([]);
  const [editData, setEditData] = useState([]);
  const authCtx = useContext(AppContext);
  const { user} = authCtx;
  const header = {
    headers: { 
      Authorization: `Bearer ${user.token}`,
  },}
  
  useEffect(() => {
    get()
  },[])

  const get = () => {
    request.get(endPoint.categories,header)
    .then((res) => {
      console.log(res.data)
      setDatas(res.data.categories)
    }).catch((error) =>{
      console.log(error)
    })
  }
  return (
    <>
      <PageHeader title="Liste des catégories" id={"categorie"}/>
      <Table>
        <TableHeader>
          <th scope="col" className="border-raduis-left">
            #
          </th>
          <th scope="col">Nom de la catégorie</th>
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
                
                <td className="fw-bold">{data.libele}</td>
                <td className="text-center">
                  <div className="btn-group">
                    <div className="d-inline-block mx-1">
                      <button 
                        className="btn btn-primary-light"
                        data-bs-toggle="modal"
                        data-bs-target="#categorie"
                        onClick={(e) => {
                          e.preventDefault()
                          setEditData(data)
                        }}
                      >
                        <img src={edit} alt="" />
                        <span> Modifier</span>
                      </button>
                    </div>
                    <div className="d-inline-block mx-1">
                      <button 
                        className="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#suppression"
                        onClick={(e) => {
                          e.preventDefault()
                          setEditData(data)
                        }}
                        
                      >
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
      <ModalCategorie id={"categorie"} editData={editData} refresh={get}/>
      <ModalSuppression id="suppression" editData={editData} refresh={get}/>
      
    </>
  );
};

export default Categorie;
