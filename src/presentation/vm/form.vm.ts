import FormService from "../../data/services/form.service";
import { makeAutoObservable, runInAction, observable, action } from "mobx";

class FormVm {
  @observable
  loading: boolean = false;
  response: boolean = false;

  constructor(private formService: FormService) {
    makeAutoObservable(this);
  }

  @action.bound
  async sendForm(form: IForm) {
    this.loading = true;

    setTimeout(async () => {
      try {
        const response = await this.formService.sendForm(form);

        runInAction(() => {
          this.response = response.success;
        });
      } finally {
        this.loading = false;
      }
    }, 5000);
  }
}

export default FormVm;
