import { useState } from 'react'
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {
  Field, 
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
  FieldLegend,
  FieldLabel,
  FieldSet,
  FieldTitle,
  FieldError
} from "@/components/ui/field";

import {Toggle} from "@/components/ui/toggle"
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea"
import { Switch } from '@/components/ui/switch';
import {Handshake, XSquare} from "lucide-react";

import {useForm} from "react-hook-form";

const FormDemo = function(){
  const {
    register,
    handleSubmit,
    formState : { errors }
  } = useForm();
  
  const onSubmit = function(data) {
    console.log(data);
  };

  return (
    <div className="w-full max-w-md">
      <form encType={"multipart/form-data"} onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor={"service-name"} >
              Nom du service 
            </FieldLabel>
            <Input 
              type={"text"} 
              id={"service-name"}
              name={"service_name"} 
              placeholder={"Entrer votre nom"} 
              {...register("service_name", {
                required: "Le nom est requis ..."
              })}

              />
            {errors.service_name && (<p className={"text-red-500"}>{errors.service_name.message}</p>)}
          </Field>

          <Field>
            <FieldLabel htmlFor={"service-description"}> Description du service </FieldLabel>
            <Textarea 
              name={"service_description"} 
              id={"service-description"}
              {...register("service_description")}
            />

          </Field>

          <Field>
            <FieldLabel htmlFor={"service-image"}> Image de couverture </FieldLabel>
            <Input 
              type={"file"} 
              accepts={"image/*"} 
              name={"service_image"} 
              id={"service-image"} 
              {...register("service_image")}
            />
            <FieldDescription>NB: Veuillez entrer une image de moins de 5Mo</FieldDescription>
          </Field>

          <Field orientation='horizontal'>
            <Button className={"bg-green-600 hover:bg-green-700 hover:cursor-pointer"} type={"submit"}> <Handshake/> Envoyer</Button>
            <Button variant={"destructive"} type={"reset"}> <XSquare/> Annuler </Button>
          </Field>
        </FieldGroup>

      </form>
    </div>
  )
};

function App() {
  
  return (
    <FormDemo />
  )
}

export default App
