import UserService from "../../data/services/user.service";
import UserModel from "../../data/models/user.model";
import { makeAutoObservable, action, observable, runInAction } from "mobx";

class UserVm {
  @observable
  loading: boolean = false;
  @observable
  user: IUser = new UserModel();

  constructor(private userService: UserService) {
    makeAutoObservable(this);

    this.init();
  }

  @action.bound
  private async init() {
    this.loading = true;

    try {
      const user = await this.userService.getUser();

      runInAction(() => {
        this.user.id = user.id;
        this.user.name = user.name;
        this.user.lastname = user.lastname;
        this.user.phone = user.phone;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}

export default UserVm;
