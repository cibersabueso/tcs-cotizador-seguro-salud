import React, { ReactElement } from "react";

// Components
import Button from "./Button";

interface Props {
  step: number;
  setStep: (newStep: number) => void;
}

const FormCotizadorFin = (props: Props): ReactElement => {
  const onSubmitStep1 = (): void => {
    props.setStep(0);
  };

  return (
    <div className="main__forms">
      <div className="main__forms--title">
        <h2>
          ¡Gracias por{" "}
          <span className="text-primary fw-normal">
            confiar en <br />
            nosotros!
          </span>
        </h2>
        <p>
          Queremos conocer mejor la salud de los asegurados. Un asesor{" "}
          <strong>
            se <br />
            pondrá en contacto
          </strong>{" "}
          contigo en las siguientes <strong>48 horas.</strong>
        </p>
      </div>
      <div className="main__forms__body">
        <Button className="btn__primary right" onClick={onSubmitStep1}>
          IR A SALUD
        </Button>
      </div>
    </div>
  );
};

export default FormCotizadorFin;
