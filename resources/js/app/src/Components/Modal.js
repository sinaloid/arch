import { useContext, useState } from "react";
import { AppContext } from "../services/context";
import endPoint from "../services/endPoint";
import request from "../services/request";
import InputField from "./InputField";

const initAdmin = {
  email     :"",   
  firstname :"",
  lastname  :"",
  image     :"",
  birthDay  :"",
  cniNumber :"",
  phoneNumber:"",
  password   :"",
  profile   :"",
}

const Modal = ({title, id}) => {
  const [admin, setAdmin] = useState(initAdmin)
  const authCtx = useContext(AppContext);
  const { user} = authCtx;
  const header = {
    headers: { 
      "Authorization": `Bearer ${user.token}`,
    "Content-Type": "multipart/form-data"
  },
  };

  const listProfile = ["SECRETAIRE",
    "DIRECTEUR",
    "MINISTRE",
    "ADMINISTRATEUR"]

  const onChange = (name, value) => {
  
      console.log(name, value)
      
      setAdmin({
          ...admin,
          [name]:value
      })
  
      console.log(admin)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(header)
    console.log(admin)
    request.post(endPoint.users, admin, header)
    .then((res => {
      console.log(res.data)
    }))
    .catch((error =>{
      console.log(error.response.data)
    }))

  }
  return (
    <>
      <div
        className="modal fade"
        id={id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <InputField
            type={"text"}
            label="Nom"
            name={"lastname"}
            value={admin.lastname}
            onChange={onChange}
          />
          <InputField
            type={"text"}
            label="Prénom"
            name={"firstname"}
            value={admin.firstname}
            onChange={onChange}
          />
          <InputField
            type={"date"}
            label="Date de naissance"
            name={"birthDay"}
            value={admin.birthDay}
            onChange={onChange}
          />
          <InputField
            type={"text"}
            label="Numéro CNIB"
            name={"cniNumber"}
            value={admin.cniNumber}
            onChange={onChange}
          />
          <InputField
            type={"text"}
            label="Email"
            name={"email"}
            value={admin.email}
            onChange={onChange}
          />
          <InputField
            type={"text"}
            label="Télephone"
            name={"phoneNumber"}
            value={admin.phoneNumber}
            onChange={onChange}
          />
          <InputField
            type={"select"}
            label="Profile"
            name={"profile"}
            value={admin.profile}
            onChange={onChange}
            options={listProfile}
          />
          <InputField
            type={"file"}
            label="Image"
            name={"image"}
            value={admin.image}
            onChange={onChange}
          />
          <InputField
            type={"text"}
            label="Mots de passe"
            name={"password"}
            value={admin.password}
            onChange={onChange}
          />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
