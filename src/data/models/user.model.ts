import { makeAutoObservable } from "mobx";

class UserModel implements IUser {
  id: string = "";
  name: string = "";
  lastname: string = "";
  phone: string = "";

  constructor() {
    makeAutoObservable(this);
  }
}

export default UserModel;
