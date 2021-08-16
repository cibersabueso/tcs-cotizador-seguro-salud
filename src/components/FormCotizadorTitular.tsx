import React, { ReactElement } from "react";

// Components
import Button from "./Button";
import Input from "./Input";
import InputDropdown from "./InputDropdown";
import InputRadio from "./InputRadio";

interface Props {
  step: number;
  setStep: (newStep: number) => void;
}

const FormCotizadorTitular: React.FC<Props> = (props: Props): ReactElement => {
  const [isCheckedB, setIsCheckedB] = React.useState(false);

  const handleChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedB(e.target.checked);
  };

  const onSubmitStep = () => {
    props.setStep(props.step + 1);
  };

  return (
    <div className="main__forms">
      <div className="main__forms--title">
        <h3 className="text-primary fw-normal">
          PASO 1 <span className="text-dark">DE 7</span>
        </h3>
        <h2>
          Hola, <span className="text-primary fw-normal">Pepito</span>
        </h2>
        <br />
        <span className="text-muted fw-normal">
          Valida que los datos sean correctos
        </span>
        <br />
      </div>
      <div className="main__forms__body">
        <span className="text-muted fw-normal">
          Datos personales del titular
        </span>
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
        <br />
        <Input
          id="1"
          name="nombres"
          value=""
          error=""
          label="Nombres"
          predicted=""
          locked={false}
          active={false}
        />
        <br />
        <Input
          id="1"
          name="apellidoPaterno"
          value=""
          error=""
          label="Apellido Paterno"
          predicted=""
          locked={false}
          active={false}
        />
        <br />
        <Input
          id="1"
          name="apellidoMaterno"
          value=""
          error=""
          label="Apellido Materno"
          predicted=""
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

        <InputRadio
          id="termscc"
          name="termscc"
          handleChange={handleChangeB}
          isChecked={isCheckedB}
          label={<a className="fw-normal">Masculino</a>}
        />
        <Button className="btn__primary right" onClick={onSubmitStep}>
          CONTINUAR {`>`}
        </Button>
      </div>
    </div>
  );
};

export default FormCotizadorTitular;
