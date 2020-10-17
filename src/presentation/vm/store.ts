import UserVm from "./user.vm";
import UserService from "../../data/services/user.service";
import FormVm from "./form.vm";
import FormService from "../../data/services/form.service";

const userService = new UserService();
const formService = new FormService();

const store = {
  userVM: new UserVm(userService),
  formVM: new FormVm(formService),
};

export default store;
