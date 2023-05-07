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

const DetailMaison = () => {
    const [data, setData] = useState('');
    const authCtx = useContext(AppContext);
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
                    <div className="col-12 col-md-4">
                      {
                        data.ressources && <img width="400px" src={apiURL+"maisons/images/"+data.ressources[0].nom} alt="" />
                      }
                    </div>
                    <div className="col-12 col-md-8">
                      {
                        data.ressources && <img width="100px" src={apiURL+"maisons/images/"+data.ressources[0].nom} alt="" />
                      }
                    </div>
                </div>
        </>
    );
};

export default DetailMaison;
