import FormService from "../../data/services/form.service";
import { makeAutoObservable } from "mobx";

class FormVm {
  loading: boolean = false;
  response: boolean = false;

  constructor(private formService: FormService) {
    makeAutoObservable(this);
  }

  async sendForm(form: IForm) {
    this.loading = true;

    try {
      const response = await this.formService.sendForm(form);

      this.response = response.success;
    } finally {
      this.loading = false;
    }
  }
}

export default FormVm;
