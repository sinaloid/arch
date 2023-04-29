import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../services/context";
import endPoint from "../services/endPoint";
import request from "../services/request";
import InputField from "./InputField";

const initMaison = {
    nom: "",
    description: "",
    adresse: "",
    nombre_chambres: "",
    nombre_douches: "",
    nombre_cuisines: "",
    prix: "",
    categorie_maison_id: "",
    images: "",
    video: "",
};
const ModalMaison = ({ id, editData = {}, refresh }) => {
    const authCtx = useContext(AppContext);
    const { user } = authCtx;
    const [categories, setCategories] = useState([]);
    const header = {
        headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "multipart/form-data"
        },
    };

    //console.log(editData);
    useEffect(() => {
        get();
        console.log(editData);
        if (editData.id !== undefined) {
            formik.setFieldValue("nom", editData.nom);
            formik.setFieldValue("description", editData.description);
            formik.setFieldValue("adresse", editData.adresse);
            formik.setFieldValue("nombre_chambres", editData.nombre_chambres);
            formik.setFieldValue("nombre_douches", editData.nombre_douches);
            formik.setFieldValue("nombre_cuisines", editData.nombre_cuisines);
            formik.setFieldValue("prix", editData.prix);
            formik.setFieldValue(
                "categorie_maison_id",
                editData.categorie_maison_id
            );
        }
    }, [editData]);

    const formik = useFormik({
        initialValues: initMaison,
        onSubmit: (values) => {
            console.log("values");
            console.log(values);
            if (editData.id !== undefined) {
                handleEditeSubmit(values, editData.id);
                
            } else {
                handleSubmit(values);
            }
            formik.resetForm();
        },
    });

    const handleSubmit = (values) => {
        //console.log(categorie);
        request
            .post(endPoint.maison, values, header)
            .then((res) => {
                console.log(res.data);
                refresh();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleEditeSubmit = (values, id) => {
        values._method = "PUT"
        request
            .post(endPoint.maison + "/" + id, values, header)
            .then((res) => {
                console.log(res.data);
                refresh();
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    const get = () => {
        request
            .get(endPoint.categorie, header)
            .then((res) => {
                console.log(res.data);
                setCategories(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="modal fade" id={id}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h4 className="modal-title text-meduim text-bold">
                            Ajout d’une maison
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
                            placeholder="Nom"
                            name={"nom"}
                            formik={formik}
                        />
                        <InputField
                            type={"text"}
                            placeholder="Adresse"
                            name={"adresse"}
                            formik={formik}
                        />
                        <InputField
                            type={"text"}
                            placeholder="Nombre de chambre"
                            name={"nombre_chambres"}
                            formik={formik}
                        />
                        <InputField
                            type={"text"}
                            placeholder="Nombre de douche"
                            name={"nombre_douches"}
                            formik={formik}
                        />
                        <InputField
                            type={"text"}
                            placeholder="Nombre de cuisine"
                            name={"nombre_cuisines"}
                            formik={formik}
                        />
                        <InputField
                            type={"text"}
                            placeholder="Loyer"
                            name={"prix"}
                            formik={formik}
                        />
                        <InputField
                            type={"select"}
                            placeholder="Sélectionnez une catégorie"
                            name={"categorie_maison_id"}
                            formik={formik}
                            options={categories}
                        />
                        <InputField
                            type={"text"}
                            placeholder="Description"
                            name={"description"}
                            formik={formik}
                        />
                        <InputField
                            type={"multiple-file"}
                            label="Image de la maison"
                            name={"images"}
                            formik={formik}
                        />
                        <InputField
                            type={"file"}
                            label="Vidéo de la maison"
                            name={"video"}
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

export default ModalMaison;
