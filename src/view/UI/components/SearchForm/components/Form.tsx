import { FC } from "react";
import { Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import { IForm, IFormData } from "../types";
import { Points } from "./Points";
import { FormButton } from "./FormButton";
import styles from "./styles/form.module.scss";
import { FormInputs } from "./FormInputs";

export const Form: FC<IForm> = ({
  loading,
  onSearch,
  onGetLocalities,
  localities,
  origin,
  destination,
  localitiesLoading = false,
}) => {
  const { control, handleSubmit } = useForm<IFormData>();

  return (
    <form onSubmit={handleSubmit(onSearch)} className={styles.wrapper}>
      <Paper elevation={3} className={styles.formWrapper}>
        <Points />

        <FormInputs
          origin={origin}
          destination={destination}
          localitiesLoading={localitiesLoading}
          control={control}
          onGetLocalities={onGetLocalities}
          localities={localities}
        />
      </Paper>
      <FormButton loading={loading} />
    </form>
  );
};
