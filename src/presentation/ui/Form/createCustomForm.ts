import { createForm, FormApi } from "final-form";

export const createCustomForm = (
  user: IUser,
  onSubmit: (values: IForm) => void
): FormApi<IForm> =>
  createForm<IForm, IForm>({
    initialValues: {
      name: user.name,
      lastname: user.lastname,
      phone: user.phone,
      peopleCount: 1,
      origin: "",
      destination: "",
      datetime: Math.floor(Date.now() / 1000),
      comment: "",
    },
    onSubmit: (values: IForm): void => {
      onSubmit(values);
    },
    validate: (values: IForm) => {
      const errors: Partial<Record<keyof IForm, string>> = {};

      if (values.name.length === 0) {
        errors.name = "Заполните поле";
      }

      if (values.phone.length === 0) {
        errors.phone = "Заполните поле";
      }

      if (values.origin.length === 0) {
        errors.origin = "Заполните поле";
      }

      if (values.destination.length === 0) {
        errors.destination = "Заполните поле";
      }

      return errors;
    },
  });
