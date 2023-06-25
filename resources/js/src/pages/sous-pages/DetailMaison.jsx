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
import request, { apiURL } from "../../services/request";
import { useNavigate, useParams } from "react-router-dom";
import Map from "../../Components/Map";

const DetailMaison = () => {
    const [data, setData] = useState("");
    const authCtx = useContext(AppContext);
    const [image,setImage] = useState('')
    const { user } = authCtx;
    const header = {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    };
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        get();
    }, []);

    const get = () => {
        request
            .get(endPoint.maison + "/" + id, header)
            .then((res) => {
                setData(res.data.maison);
                setImage(res.data.maison.ressources[0])
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onDelete = (id) => {
        //console.log(categorie);
        request
            .delete(endPoint.maison + "/" + id, header)
            .then((res) => {
                console.log(res.data.maison);
                get();
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center">
                <h1 className="">Détail de la maison</h1>
            </div>
            <div className="row my-4">
                <div className="col-12 col-md-6">
                    {data.ressources && (
                        <img
                            width="100%"
                            src={
                                apiURL +
                                "maisons/images/" +
                                image.nom
                            }
                            alt=""
                        />
                    )}
                    <div className="row rows-cols-md-4 my-3">
                        {data.ressources &&
                            data.ressources.map((data) => {
                                return (
                                    <div className="col" onClick={e =>{
                                        e.preventDefault()
                                        setImage(data)
                                    }}>
                                        <img
                                            width="100px"
                                            src={
                                                apiURL +
                                                "maisons/images/" +
                                                data.nom
                                            }
                                            alt=""
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h1>{data.nom}</h1>
                    <div className="d-flex">
                        {data.categorie_maison && (
                            <p>{data.categorie_maison.nom}</p>
                        )}
                        <div className="fw-bold ms-auto">disponible</div>
                    </div>
                    <div className="d-flex">
                        <p className="me-auto">{data.adresse}</p>
                        <p className="fw-bold">{data.prix + " FCFA"}</p>
                    </div>
                    <p>{data.description}</p>
                    <div className="d-flex">
                        <span className="fw-bold">25 Commentaires</span>
                    </div>
                </div>
                <div>
                    <Map />
                </div>
            </div>
        </>
    );
};

export default DetailMaison;
