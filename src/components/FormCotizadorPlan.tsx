import React, { ReactElement } from "react";

// Components
import Button from "./Button";

interface Props {
  step: number;
  setStep: (newStep: number) => void;
}

const FormCotizadorPlan: React.FC<Props> = (props: Props): ReactElement => {
  const onSubmitStep = () => {
    props.setStep(props.step + 1);
  };

  return (
    <div className="main__forms">
      <div className="main__forms--title">
        <h3 className="text-primary fw-normal">
          PASO 2 <span className="text-dark">DE 7</span>
        </h3>
        <h2>
          Elige <span className="text-primary fw-normal">tu protección</span>
        </h2>
        <br />
        <span className="text-muted fw-normal">
          Selecciona tu plan de salud ideal
        </span>
        <br />
      </div>
      <div className="main__forms__body d-flex">
        <p className="text-primary" onClick={onSubmitStep}>
          ENVIAR COTIZACIÓN POR CORREO
        </p>
        <Button className="btn__primary right" onClick={onSubmitStep}>
          COMPRAR PLAN
        </Button>
      </div>
    </div>
  );
};

export default FormCotizadorPlan;
