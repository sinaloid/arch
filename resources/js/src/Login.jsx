import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { Main } from "../layout";
import login from "./assets/images/login.jpg";
//import { links } from "../routes/constant";
import eHide from "./assets/images/icons/eyeHide.png";
import eView from "./assets/images/icons/eye.png";
import logo from "./assets/images/arch.png";
import { AppContext } from "./services/context";
import request from "./services/request";
import endPoint from "./services/endPoint";

const Login = () => {
  const [inputType, setInputType] = useState("password");
  const [viewContent, setViewContent] = useState(false);
  const navigate = useNavigate();

  const authCtx = useContext(AppContext);
  const { user, onUserChange } = authCtx;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFail, setLoginFail] = useState(false);
  
  useEffect(() => {
    isAuth();
  }, [user.isAuth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username: username,
      password: password,
    });
    setLoginFail(false)
    request
      .post(endPoint.login, {
        email: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data)
        onUserChange({
          isAuth: true,
          type: "",
          name: res.data.nom + " " + res.data.prenom,
          profile:"",
          //roles: res.data.roles,
          token: res.data.access_token,
          cni:""
        });
          isAuth();
      })
      .catch((error) => {
        setLoginFail(true);
        console.log(error);
      });
  };

  const isAuth = () => {
    if (user.isAuth === true && user.token != null && user.token !== "") {
      console.log(`connexion reussi, isAuth: ${user}`);
      console.log(user);

      return navigate("/dashboard/");
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-md-10 mx-auto">
        <div className="row">
        <div className="col-12 col-lg-5 order-2 order-md-1 pt-5">
          <form onSubmit={handleSubmit} className="mt-5">

            <h1 className="fs-48 fw-bold m-0">Connexion</h1>
            <span className="d-inline-block mb-5">Heureux de vous revoir</span>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3 position-relative">
              <input
                type={inputType}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                className="position-absolute eye-position"
                src={viewContent ? eView: eHide}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  if(inputType === "password"){
                    setInputType("text")
                    setViewContent(!viewContent)
                  }else{
                    setInputType("password")
                    setViewContent(!viewContent)
                  }
                }}
              />
            </div>

            <div className="checkbox mb-3 position-relative">
              <label className="text-small align-middle">
                <input
                  className="d-inline-block"
                  type="checkbox"
                  value="remember-me"
                  style={{height:"fit-content"}}
                />{" "}
                <span>Se souvenir de moi</span>
              </label>
              <Link
                to="#"
                className="fs-14 text-black link text-decoration-none position-absolute top-0 end-0"
                data-bs-toggle="modal"
                data-bs-target="#forgetPassword"
              >
                Mot de passe oublié ?
              </Link>
            </div>
            <button 
                //type="submit" 
                className="w-100 btn btn-lg btn-primary p-0"
                onClick={handleSubmit}
                >
              Se connecter
            </button>
            <div className="text-center my-2">
                <span>
                    <span>Vous n'avez pas de compte ?</span>
                    <Link to={"#"} className="fs-14 text-black"> Inscrivez-vous</Link>
                </span>
            </div>
          </form>
        </div>
        <div className="col-lg-7 d-none d-lg-block order-1 order-md-2 overflow-hidden">
            <img height="100%" src={logo} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
