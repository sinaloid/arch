import InputField from "./InputField"


const PersonneForm = () => {

    return (
        <>
          <InputField
            type={"text"}
            label="Nom"
            name={"nom"}
            value={""}
            onChange={onchange}
          />
          <InputField
            type={"text"}
            label="Prénom"
            name={"prenom"}
            value={""}
            onChange={onchange}
          />
          <InputField
            type={"text"}
            label="Date de naissance"
            name={"date"}
            value={""}
            onChange={onchange}
          />
          <InputField
            type={"text"}
            label="Lieu de naissance"
            name={"lieu"}
            value={""}
            onChange={onchange}
          />
          <InputField
            type={"text"}
            label="Lieu de residance"
            name={"residance"}
            value={""}
            onChange={onchange}
          />
          <InputField
            type={"text"}
            label="Numéro CNIB"
            name={"cnib"}
            value={""}
            onChange={onchange}
          />
          <InputField
            type={"text"}
            label="Téléphone"
            name={"telephone1"}
            value={""}
            onChange={onchange}
          />
          <InputField
            type={"text"}
            label="Email"
            name={"email"}
            value={""}
            onChange={onchange}
          />
        </>
    )
}

export default PersonneForm