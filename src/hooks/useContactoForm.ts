import { useState } from "react";

import {
  useForm,
  type SubmitHandler,
} from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";


import { contactoSchema } from "../schemas/ContactoSchema";
import type { ContactoForm, ContactoPayload, EstadoEnvio } from "../models/ContactoForm";




const FORMSPREE_ENDPOINT: string =
  "https://formspree.io/f/meajrygr";


export const useContactoForm = () => {

  const [estadoEnvio, setEstadoEnvio] =
    useState<EstadoEnvio>("idle");


  const {
    register,
    handleSubmit,
    reset,

    formState: {
      errors,
      isSubmitting,
      isValid,
    },

  } = useForm<ContactoForm>({
    resolver: yupResolver(contactoSchema),

    mode: "onChange",

    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      motivo: "",
      mensaje: "",
    },
  });


  const onSubmit: SubmitHandler<ContactoForm> =
    async (data: ContactoForm): Promise<void> => {

      setEstadoEnvio("idle");


      
      const empresa: string =
        (data.empresa ?? "").trim();


      /*
       * Este es el objeto final que enviamos
       * a Formspree.
       */
      const contacto: ContactoPayload = {

        nombre: data.nombre.trim(),

        empresa:
          empresa.length > 0
            ? empresa
            : "No especificada",

        email: data.email
          .trim()
          .toLowerCase(),

        motivo: data.motivo,

        mensaje: data.mensaje.trim(),
      };


      try {

        const response: Response =
          await fetch(
            FORMSPREE_ENDPOINT,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",

                Accept:
                  "application/json",
              },

              body: JSON.stringify(contacto),
            }
          );


        if (!response.ok) {
          throw new Error(
            `Error al enviar el formulario: ${response.status}`
          );
        }


        setEstadoEnvio("success");

        reset();

      } catch (error: unknown) {

        if (error instanceof Error) {

          console.error(
            "Error al enviar el formulario:",
            error.message
          );

        } else {

          console.error(
            "Ocurrió un error desconocido al enviar el formulario"
          );

        }


        setEstadoEnvio("error");
      }
    };


  return {
    register,
    handleSubmit,
    onSubmit,

    errors,
    isSubmitting,
    isValid,

    estadoEnvio,
  };
};