class UserService {
  private url: string = "data/user.json";

  async getUser(): Promise<IUser> {
    const response = await fetch(this.url);

    return await response.json();
  }
}

export default UserService;
