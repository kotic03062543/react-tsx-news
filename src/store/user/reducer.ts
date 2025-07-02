import { RESET_USER, SET_USER } from "./action";
import { initial, type IUserActionPayloadProps, type IUserState } from "./type";

const reducer = (
  state: IUserState = initial,
  action: IUserActionPayloadProps
) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    case RESET_USER:
      return { ...initial };
    default:
      return initial;
  }
};
export default reducer;
