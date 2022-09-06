import { FC, useEffect } from "react";
import { Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { IForm, IFormData } from "../types";
import { Point } from "./Point";
import { FormButton } from "./FormButton";
import { FormInputs } from "./FormInputs";
import styles from "./styles/form.module.scss";

export const Form: FC<IForm> = ({
  loading,
  origin = "",
  destination = "",
  onSearch,
  onExpand,
  minified = false,
  className = "",
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<IFormData>();

  useEffect(() => {
    if (origin) {
      setValue("origin", origin);
    }
    if (destination) {
      setValue("destination", destination);
    }
  }, [setValue, origin, destination]);

  return (
    <form onSubmit={handleSubmit(onSearch)} className={styles.wrapper}>
      <Paper elevation={3} className={`${styles.formWrapper}`}>
        <Point />
        <FormInputs errors={errors}/>
      </Paper>
      <FormButton />
    </form>
  );
};
