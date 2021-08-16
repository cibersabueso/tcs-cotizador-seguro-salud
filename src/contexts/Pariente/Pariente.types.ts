type Registrante = {
  numDocumento: string,
  fecNacimiento: string,
  nroCelular: string,
  aceptoProteccionDatos: boolean,
  aceptoEnvioComerciales: boolean
}

// type Pariente = {

// }

export type ParienteContextState = {
  formRegistrante: Registrante;
  esFormPariente: boolean;
  formPariente: {};
  agregarRegistrante: (datosRegistrante: any) => void;
  agregarPasoPariente: (nroPaso: number, datos: any) => void;
  retornar: (irSalud: boolean) => boolean;
};
