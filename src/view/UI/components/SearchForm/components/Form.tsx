import { FC, useEffect } from "react";
import {
  Button,
  IconButton,
  Input,
  LinearProgress,
  Paper,
  TextField,
} from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { useForm } from "react-hook-form";
import { IForm, IFormData } from "../types";
import styles from "../styles.module.scss";
import { FormErrorsDictionary } from "../../../../../constants/FormErrorsDictionary";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

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

  const handleChangeRoute = () => {
    const originValue = getValues("origin");
    const destinationValue = getValues("destination");

    setValue("origin", destinationValue);
    setValue("destination", originValue);
  };

  return (
    <div  className={`${styles.formWrapper} ${className} ${styles.test}`}>
      <div className={styles.points}>
        <div className={styles.point}></div>
        <div className={styles.line}></div>
        <div className={styles.point}></div>
      </div>
      
      <form onSubmit={handleSubmit(onSearch)} className={styles.wrapper}>
        <Input
          placeholder="Откуда"
          inputProps={{
            "aria-label": "Description",
          }}
        />

        <Input
          placeholder="Куда"
          inputProps={{
            "aria-label": "Description",
          }}
        />

        {/* <div className={styles.actions}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
            className={styles.formButton}
            disabled={loading}
          >
            Найти
          </Button>

          {minified && (
            <Button
              startIcon={
                <KeyboardArrowLeftOutlinedIcon
                  className={styles.rollUpButtonIcon}
                />
              }
              size="large"
              color="primary"
              variant="text"
              onClick={onExpand}
              className={styles.formButton}
            >
              Свернуть
            </Button>
          )}
        </div> */}
      </form>

      {loading && <LinearProgress />}
    </div>
  );
};
