class FormService {
  private url: string = "data/form.json";

  async sendForm(form: IForm): Promise<IFormResponse> {
    // const formJSON = JSON.stringify(form);

    const response = await fetch(this.url, {
      method: "get",
      // body: formJSON,
    });

    return await response.json();
  }
}

export default FormService;
