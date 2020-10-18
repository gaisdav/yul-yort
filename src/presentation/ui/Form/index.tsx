import React, {
  FC,
  useState,
  FormEvent,
  useMemo,
  useEffect,
  ChangeEventHandler,
  ChangeEvent,
  useContext,
} from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  Grid,
  Paper,
} from "@material-ui/core";
import { DateTimePicker } from "@material-ui/pickers";
import { FormState } from "final-form";
import { createCustomForm } from "./createCustomForm";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { StoreContext } from "../../../index";
import { observer } from "mobx-react-lite";
import useStyles from "./styles";

const Form: FC = () => {
  const [formState, setFormState] = useState<FormState<IForm> | null>(null);
  const { userVM, formVM } = useContext(StoreContext);

  const styles = useStyles();

  const handleForm = async (values: IForm) => {
    await formVM.sendForm(values);
  };

  const form = useMemo(() => createCustomForm(userVM.user, handleForm), [
    userVM.user.id,
  ]);

  useEffect(() => {
    return form.subscribe(setFormState, {
      values: true,
      submitting: true,
      invalid: true,
    });
  }, [form.getState]);

  if (!formState) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    form.submit();
  };

  const handleNameChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    const value = event.target.value;
    form.change("name", value);
  };

  const handleLastNameChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    const value = event.target.value;
    form.change("lastname", value);
  };

  const handlePhoneChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    const value = event.target.value.replace(/\D/g, "");
    form.change("phone", value);
  };

  const handleOriginChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    const value = event.target.value;
    form.change("origin", value);
  };

  const handleDestinationChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    const value = event.target.value;
    form.change("destination", value);
  };

  const handleCommentChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    const value = event.target.value;
    form.change("comment", value);
  };

  const handleSelectChange = (
    event: ChangeEvent<{
      name?: string;
      value: unknown;
    }>
  ): void => {
    const value = Number(event.target.value) || 1;
    form.change("peopleCount", value);
  };

  const handleDateChange = (date: MaterialUiPickersDate): void => {
    if (!date) {
      return;
    }

    const dateTime = Math.floor(date.getTime() / 1000);
    form.change("datetime", dateTime);
  };

  return (
    <Paper className={styles.form}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item xs={12}>
            <TextField
              autoComplete="on"
              disabled={userVM.loading}
              size={"small"}
              fullWidth
              label="Имя"
              variant="outlined"
              required={true}
              value={formState.values.name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="on"
              disabled={userVM.loading}
              size={"small"}
              fullWidth
              label="Фамилия"
              variant="outlined"
              value={formState.values.lastname}
              onChange={handleLastNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="on"
              disabled={userVM.loading}
              size={"small"}
              fullWidth
              label="Телефон"
              variant="outlined"
              required={true}
              placeholder="Введите ваш телефон"
              value={formState.values.phone}
              onChange={handlePhoneChange}
              type="tel"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl
              disabled={userVM.loading}
              variant="outlined"
              fullWidth
              size={"small"}
              required={true}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Пассажиры
              </InputLabel>
              <Select
                defaultValue={formState.values.peopleCount || 1}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Пассажиры"
                onChange={handleSelectChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <DateTimePicker
              className={styles.dateTimePicker}
              disabled={userVM.loading}
              required={true}
              okLabel="Ok"
              cancelLabel="Отмена"
              todayLabel="Сегодня"
              size={"small"}
              hideTabs={true}
              format="dd.MM HH:mm"
              fullWidth
              value={new Date(formState.values.datetime * 1000)}
              onChange={handleDateChange}
              disablePast
              label="Когда?"
              showTodayButton
              inputVariant="outlined"
              ampm={false}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="on"
              disabled={userVM.loading}
              size={"small"}
              required
              fullWidth
              label="Откуда"
              variant="outlined"
              placeholder="Нас. пункт, адрес"
              value={formState.values.origin}
              onChange={handleOriginChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="on"
              disabled={userVM.loading}
              size={"small"}
              label="Куда"
              variant="outlined"
              required
              fullWidth
              placeholder="Нас. пункт, адрес"
              value={formState.values.destination}
              onChange={handleDestinationChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="on"
              disabled={userVM.loading}
              rows={3}
              size={"small"}
              multiline
              fullWidth
              label="Комментарий"
              variant="outlined"
              value={formState.values.comment}
              onChange={handleCommentChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={formState.invalid || userVM.loading}
              variant="contained"
              color="primary"
              fullWidth={true}
              type={"submit"}
            >
              {userVM.loading ? <CircularProgress size={24} /> : "Отправить"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default observer(Form);
