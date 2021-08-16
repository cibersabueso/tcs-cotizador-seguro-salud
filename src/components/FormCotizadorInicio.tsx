import React, { ReactElement } from "react";

// Components
import Button from "./Button";
import Input from "./Input";
import InputDropdown from "./InputDropdown";
import InputCheckbox from "./InputCheckbox";

interface Props {
  step: number;
  setStep: (newStep: number) => void;
}

const FormCotizadorInicio: React.FC<Props> = (props: Props): ReactElement => {
  const [isCheckedA, setIsCheckedA] = React.useState(false);
  const [isCheckedB, setIsCheckedB] = React.useState(false);

  const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedA(e.target.checked);
  };

  const handleChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedB(e.target.checked);
  };

  const onSubmitStep = () => {
    props.setStep(props.step + 1);
  };

  return (
    <div className="main__forms">
      <div className="main__forms--title">
        <h2>
          Obtén tu <span className="text-primary fw-normal">seguro ahora</span>
        </h2>
        <p className="text-muted fw-normal mb-2">
          Ingresa los datos para comenzar.
        </p>
      </div>
      <div className="main__forms__body">
        <InputDropdown
          id="1"
          name="nro_documento"
          valueSelect="dni"
          value=""
          error=""
          label="Nro. de documento"
          predicted="2"
          locked={false}
          active={false}
        />
        <br />
        <Input
          id="1"
          name="fecNacimiento"
          value=""
          error=""
          label="Fecha de nacimiento"
          predicted=""
          locked={false}
          active={false}
        />
        <br />
        <Input
          id="1"
          name="celular"
          value=""
          error=""
          label="Celular"
          predicted=""
          locked={false}
          active={false}
        />
        <br />
        <InputCheckbox
          id="termslp"
          name="termslp"
          handleChange={handleChangeA}
          isChecked={isCheckedA}
          label={
            <a className="text-muted fw-normal">
              Acepto la{" "}
              <span className="text-decoration-underline">
                Política de Protección de Datos Personales y los Términos y
                Condiciones
              </span>
            </a>
          }
        />
        <br />

        <InputCheckbox
          id="termscc"
          name="termscc"
          handleChange={handleChangeB}
          isChecked={isCheckedB}
          label={
            <a className="text-muted fw-normal">
              Acepto la{" "}
              <span className="text-decoration-underline">
                {" "}
                Política de envío de Comunicaciones Comerciales
              </span>
            </a>
          }
        />
        <br />
        <br />
        <Button className="btn__primary right" onClick={onSubmitStep}>
          COMENCEMOS
        </Button>
      </div>
    </div>
  );
};

export default FormCotizadorInicio;
