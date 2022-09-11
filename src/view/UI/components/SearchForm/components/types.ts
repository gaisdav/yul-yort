import { Control } from "react-hook-form";

//TODO: исправить any
export interface IFormInputs {
  control: Control<any>;
}

export interface IFormButton {
  loading: boolean | undefined,
}