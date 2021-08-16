import React, { useState, ReactElement } from "react";

// Components
import FormCotizadorInicio from "../components/FormCotizadorInicio";
import FormCotizadorTitular from "../components/FormCotizadorTitular";
import FormCotizadorPlan from "../components/FormCotizadorPlan";
import FormCotizadorFin from "../components/FormCotizadorFin";

interface Props {}

export const CotizarSeguro = (props: Props): ReactElement => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  return (
    <main className="main">
      <div className="main__banner">
        <img
          className="main__banner--base"
          src={process.env.PUBLIC_URL + "/img/Base.png"}
          alt="Base ESSALUD"
        />
        <div className="main__banner--content">
          <div className="main__banner--content__title">
            <h2>
              Seguro de
              <br />
              <strong>Salud</strong>
            </h2>
            <ul className="main__banner--content__list">
              <li>
                <img
                  className="icon"
                  src={process.env.PUBLIC_URL + "/img/gl_shield-20x20.png"}
                  alt=" "
                />
                Cómpralo de manera fácil y rápida
              </li>
              <li>
                <img
                  className="icon"
                  src={process.env.PUBLIC_URL + "/img/gl_mobile-20x20.png"}
                  alt=" "
                />
                Cotiza y compra tu seguro 100% digital
              </li>
              <li>
                <img
                  className="icon"
                  src={process.env.PUBLIC_URL + "/img/gl_shield-20x20.png"}
                  alt=" "
                />
                Hasta S/. 12 millones de cobertura anual
              </li>
              <li>
                <img
                  className="icon"
                  src={process.env.PUBLIC_URL + "/img/gl_mobile-20x20.png"}
                  alt=" "
                />
                Más de 300 clínicas en todo el Perú
              </li>
            </ul>
            <strong className="main__banner--content__author">
              @ 2020 RIMAC Seguros y Reaseguros
            </strong>
          </div>
        </div>
        <img
          className="main__banner--illustration"
          src={process.env.PUBLIC_URL + "/img/Illustration-1.png"}
          alt="Illustration-1"
        />
      </div>
      {currentStep === 0 ? (
        <FormCotizadorInicio step={currentStep} setStep={setCurrentStep} />
      ) : currentStep === 1 ? (
        <FormCotizadorTitular step={currentStep} setStep={setCurrentStep} />
      ) : currentStep === 2 ? (
        <FormCotizadorPlan step={currentStep} setStep={setCurrentStep} />
      ) : (
        <FormCotizadorFin step={currentStep} setStep={setCurrentStep} />
      )}
    </main>
  );
};
