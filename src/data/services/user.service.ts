class UserService {
  private url: string = "data/user.json";

  async getUser(): Promise<IUser> {
    // const response = await fetch(this.url);
    //
    // const user = await response.json();
    //
    // console.log(user);

    return {
      id: "as89d6f-as8967df-8967afsd",
      name: "Иванов",
      lastname: "Иван",
      phone: "89773495113",
    };
  }
}

export default UserService;
