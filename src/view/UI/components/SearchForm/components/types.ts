import { FieldErrors, UseFormRegister } from "react-hook-form";

//TODO: исправить any
export interface IFormInputs {
  errors: FieldErrors<any>,
  register: UseFormRegister<any>
  clearErrors: any
}

export interface IFormButton {
  loading: boolean | undefined,
}