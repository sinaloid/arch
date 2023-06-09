import { get } from "jquery";
import React, { useContext, useEffect, useState } from "react";
import edit from "../../assets/images/icons/edit.png";
import ModalCategorie from "../../Components/ModalCategorie";
import ModalMaison from "../../Components/ModalMaison";
import ModalSuppression from "../../Components/ModalSuppression";
import PageHeader from "../../Components/PageHeader";
import Table from "../../Components/Table";
import TableContent from "../../Components/TableContent";
import TableHeader from "../../Components/TableHeader";
import { AppContext } from "../../services/context";
import endPoint from "../../services/endPoint";
import request from "../../services/request";
import { useNavigate } from "react-router-dom";

const ListMaison = () => {
  const [datas, setDatas] = useState([]);
  const [editData, setEditData] = useState([]);
  const authCtx = useContext(AppContext);
  const { user} = authCtx;
  const header = {
    headers: { 
      Authorization: `Bearer ${user.token}`,
  },}
  const navigate = useNavigate()
  
  useEffect(() => {
    get()
  },[])

  const get = () => {
    request.get(endPoint.maison,header)
    .then((res) => {
      console.log(res.data)
      setDatas(res.data.maisons)
      setEditData({})
    }).catch((error) =>{
      console.log(error)
    })
  }

  const onDelete = (id) => {
    //console.log(categorie);
    request
      .delete(endPoint.maison+"/"+id, header)
      .then((res) => {
        console.log(res.data);
        get()
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  return (
    <>
      <PageHeader title="Liste des maisons" id={"maison"}/>
      <Table>
        <TableHeader>
          <th scope="col" className="border-raduis-left">
            #
          </th>
          <th scope="col">Libellé</th>
          <th scope="col">Ville</th>
          <th scope="col">Adresse</th>
          <th scope="col">Prix</th>
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
                
                <td className="fw-bold">{data.nom}</td>
                <td className="fw-bold">{data.commune?.commune_name}</td>
                <td className="fw-bold">{data.adresse}</td>
                <td className="fw-bold">{data.prix} Fcfa</td>
                <td className="text-center">
                  <div className="btn-group">
                  <div className="btn-group mx-1">
                      <button 
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.preventDefault()
                          navigate("detail/"+data.id)
                        }}
                      >
                        <img src={edit} alt="" />
                        <span> voir</span>
                      </button>
                    </div>
                    <div className="btn-group mx-1">
                      <button 
                        className="btn btn-primary-light"
                        data-bs-toggle="modal"
                        data-bs-target="#maison"
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
      <ModalMaison id={"maison"} editData={editData} refresh={get}/>
      <ModalSuppression id="suppression" editData={editData} refresh={get} onDelete={onDelete}/>
      
    </>
  );
};

export default ListMaison;
