import { useContext, useEffect, useState } from "react";
import { AppContext } from "../services/context";
import endPoint from "../services/endPoint";
import request from "../services/request";
import InputField from "./InputField";

const initCategorie = {
  libelle: "",
};
const ModalSuppression = ({ id, editData = {}, refresh, onDelete = () =>{}}) => {
  const [categorie, setCategorie] = useState(initCategorie);
  const authCtx = useContext(AppContext);
  const { user } = authCtx;
  const header = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() =>{
    console.log(editData)
    setCategorie({libelle:editData.libele})
  },[editData])
  const onChange = (name, value) => {
    setCategorie({
      ...categorie,
      [name]: value,
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
            Voulez supprimer les données ?
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
              onClick={e => {
                e.preventDefault()
                onDelete(editData.id)
              }}
            >
              Comfirmer la suppression
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSuppression;
