import React, { createContext, useState, FC } from "react";

// Types
import { ParienteContextState } from "./Pariente.types";

// Initial State
const contextInitialState: ParienteContextState = {
  formRegistrante: {
    numDocumento: "",
    fecNacimiento: "",
    nroCelular: "",
    aceptoProteccionDatos: false,
    aceptoEnvioComerciales: false
  },
  esFormPariente: false,
  formPariente: {},
  agregarRegistrante: () => {},
  agregarPasoPariente: () => {},
  retornar: (irSalud: boolean) => {
    return irSalud;
  },
};

// Creando contexto
export const ParienteContext =
  createContext<ParienteContextState>(contextInitialState);

const ParienteProvider: FC = ({ children }) => {
  const [formRegistrante, setFormRegistrante] = useState<any>(
    contextInitialState.formRegistrante
  );
  const [esFormPariente, setEsFormPariente] = useState<boolean>(
    contextInitialState.esFormPariente
  );
  const [formPariente, setFormPariente] = useState<any>(
    contextInitialState.formPariente
  );

  const agregarRegistrante = (datosRegistrante: any) =>
    setFormRegistrante(datosRegistrante);
  const agregarPasoPariente = (nroPaso: number, datos: any) =>
    setFormPariente({ ...formPariente, [nroPaso]: datos });

  const retornar = (irSalud: boolean) => {
    return irSalud;
  };

  return (
    <ParienteContext.Provider
      value={{
        formRegistrante,
        esFormPariente,
        formPariente,
        agregarRegistrante,
        agregarPasoPariente,
        retornar,
      }}
    >
      {children}
    </ParienteContext.Provider>
  );
};

export default ParienteProvider;
