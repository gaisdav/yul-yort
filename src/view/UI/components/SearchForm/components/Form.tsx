import { FC } from "react";
import { Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { IForm, IFormData } from "../types";
import { Point } from "./Point";
import { FormButton } from "./FormButton";
import styles from "./styles/form.module.scss";
import { FormInputs } from "./FormInputs";

export const Form: FC<IForm> = ({ loading, onSearch }) => {
  const { control, handleSubmit } = useForm<IFormData>();

  return (
    <form onSubmit={handleSubmit(onSearch)} className={styles.wrapper}>
      <Paper elevation={3} className={styles.formWrapper}>
        <Point />
        <FormInputs control={control} />
      </Paper>
      <FormButton loading={loading} />
    </form>
  );
};
