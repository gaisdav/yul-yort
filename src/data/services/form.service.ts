class FormService {
  private url: string = "data/form.json";

  async sendForm(form: IForm): Promise<IFormResponse> {
    const formJSON = JSON.stringify(form);

    const response = await fetch(this.url, {
      method: "post",
      body: formJSON,
    });

    return {
      success: true,
    };
  }
}

export default FormService;
