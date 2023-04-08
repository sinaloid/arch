import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../services/context";
import endPoint from "../services/endPoint";
import request from "../services/request";
import InputField from "./InputField";

const initCategorie = {
  nom: "",
  description: "",
  image: "",
};
const ModalCategorie = ({ id, editData = {}, refresh}) => {
  const authCtx = useContext(AppContext);
  const { user } = authCtx;
  const header = {
    headers: {
      Authorization: `Bearer ${user.token}`,
      "Content-Type": "multipart/form-data"
    },
  };

  //console.log(editData)
  useEffect(() =>{
    console.log(editData)
    if(editData.id !==undefined){
      formik.setFieldValue("nom",editData.nom)
      formik.setFieldValue("description",editData.description)
    }
    
  },[editData])

  const formik = useFormik({
    initialValues:initCategorie,
    onSubmit:(values) =>{
      console.log(values)
      if(editData.id !== undefined){
        handleEditeSubmit(values, editData.id)
        
      }else{
        handleSubmit(values)
      }
      formik.resetForm()
    }
  })

  const handleSubmit = (values) => {
    //console.log(categorie);
    request
      .post(endPoint.categorie, values, header)
      .then((res) => {
        console.log(res.data);
        refresh()
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handleEditeSubmit = (values,id) => {
    const data = new FormData();
        data.append("nom", values.nom);
        data.append("description", values.description);
        data.append("image", values.image);
        data.append('_method', 'PUT')
    request
      .post(endPoint.categorie+"/"+id, data, header)
      .then((res) => {
        console.log(res.data);
        refresh()
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="modal fade" id={id}>
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
            <InputField
              type={"text"}
              label="Catégorie"
              name={"nom"}
              formik={formik}
            />
            <InputField
              type={"text"}
              label="Description"
              name={"description"}
              formik={formik}
            />
            <InputField
              type={"file"}
              label="Image de la categorie"
              name={"image"}
              formik={formik}
            />
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
              onClick={formik.handleSubmit}
            >
              Enregistrer la catégorie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCategorie;
