import UserService from "../../data/services/user.service";
import UserModel from "../../data/models/user.model";
import { makeAutoObservable, action } from "mobx";

class UserVm {
  loading: boolean = false;
  user: IUser = new UserModel();

  constructor(private userService: UserService) {
    makeAutoObservable(this);

    this.init();
  }

  @action
  private async init() {
    this.loading = true;

    try {
      const user = await this.userService.getUser();

      this.user.id = user.id;
      this.user.name = user.name;
      this.user.lastname = user.lastname;
      this.user.phone = user.phone;
    } finally {
      this.loading = false;
    }
  }
}

export default UserVm;
