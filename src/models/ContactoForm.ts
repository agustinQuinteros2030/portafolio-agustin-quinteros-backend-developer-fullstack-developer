export interface ContactoForm {
  nombre: string;
  empresa?: string;
  email: string;
  motivo: string;
  mensaje: string;
}

export interface ContactoPayload {
  nombre: string;
  empresa: string;
  email: string;
  motivo: string;
  mensaje: string;
}

export type EstadoEnvio =
  | "idle"
  | "success"
  | "error";