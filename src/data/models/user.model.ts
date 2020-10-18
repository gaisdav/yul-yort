import { makeAutoObservable, observable } from "mobx";

class UserModel implements IUser {
  @observable
  id: string = "";
  @observable
  name: string = "";
  @observable
  lastname: string = "";
  @observable
  phone: string = "";

  constructor() {
    makeAutoObservable(this);
  }
}

export default UserModel;
