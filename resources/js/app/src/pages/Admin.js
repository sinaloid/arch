import React, { useContext, useEffect, useState } from "react";
import edit from "../assets/images/icons/edit.png";
import AdminForm from "../Components/AdminForm";
import Modal from "../Components/Modal";
import PageHeader from "../Components/PageHeader";
import Table from "../Components/Table";
import TableContent from "../Components/TableContent";
import TableHeader from "../Components/TableHeader";
import { AppContext } from "../services/context";
import endPoint from "../services/endPoint";
import request from "../services/request";


const Admin = () => {
  const [datas, setDatas] = useState([]);
  const authCtx = useContext(AppContext);
  const { user} = authCtx;
  const header = {
    headers: { 
      Authorization: `Bearer ${user.token}`,
  },}
  
  useEffect(() => {
    request.get(endPoint.users,header)
    .then((res) => {
      console.log(res.data)
      setDatas(res.data.users)
    }).catch((error) =>{
      console.log(error)
    })
  },[])

  return (
    <>
      <PageHeader title="Liste des administrateurs" id={"admin"}/>
      <Table>
        <TableHeader>
          <th scope="col" className="border-raduis-left">
            #
          </th>
          <th scope="col">Nom Prénom</th>
          <th scope="col">Contact</th>
          <th scope="col">Profile</th>
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
                <td>{data.lastname +" "+data.firstname}</td>
                <td>
                  <span>+226 {data.phoneNumber}</span> <br />
                  <span>{data.email}</span> <br />
                </td>
                <td>{data.profile}</td>
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
      <Modal id={"admin"} title={"Creation d'un administrateur"}>
        <AdminForm />
      </Modal>
    </>
  );
};

export default Admin;
