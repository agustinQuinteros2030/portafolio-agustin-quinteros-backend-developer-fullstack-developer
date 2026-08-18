import * as yup from "yup";
import type { ContactoForm } from "../models/ContactoForm";


const dominiosPermitidos = [
  "gmail.com",

  "outlook.com",
  "outlook.es",

  "hotmail.com",
  "hotmail.com.ar",

  "live.com",

  "yahoo.com",
  "yahoo.com.ar",

  "icloud.com",

  "proton.me",
  "protonmail.com",
];

export const contactoSchema: yup.ObjectSchema<ContactoForm> = yup.object({
  nombre: yup
    .string()
    .trim()
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede superar los 50 caracteres"),

  empresa: yup
    .string()
    .trim()
    .defined()
    .max(80, "La empresa no puede superar los 80 caracteres"),

  email: yup
    .string()
    .trim()
    .required("El email es obligatorio")
    .email("Ingresá un email válido")
    .test(
      "dominio-email",
      "Utilizá un correo de Gmail, Outlook, Hotmail, Yahoo, iCloud o Proton",
      (value) => {
        if (!value) {
          return false;
        }

        const dominio = value
          .split("@")[1]
          ?.toLowerCase();

        if (!dominio) {
          return false;
        }

        return dominiosPermitidos.includes(dominio);
      }
    ),

  motivo: yup
    .string()
    .required("Seleccioná un motivo de contacto"),

  mensaje: yup
    .string()
    .trim()
    .required("El mensaje es obligatorio")
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede superar los 1000 caracteres"),
});