import { FC } from "react";
import { Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { IForm, IFormData } from "../types";
import { Point } from "./Point";
import { FormButton } from "./FormButton";
import { FormInputs } from "./FormInputs";
import styles from "./styles/form.module.scss";

export const Form: FC<IForm> = ({ loading, onSearch }) => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<IFormData>();

  return (
    <form onSubmit={handleSubmit(onSearch)} className={styles.wrapper}>
      <Paper elevation={3} className={styles.formWrapper}>
        <Point />
        <FormInputs
          errors={errors}
          register={register}
          clearErrors={clearErrors}
        />
      </Paper>
      <FormButton loading={loading} />
    </form>
  );
};
