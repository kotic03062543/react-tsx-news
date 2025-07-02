export interface IUserState {
  userId: string;
  userName: string;
  userEmail: string;
}

export const initial: IUserState = {
  userId: "",
  userName: "",
  userEmail: "",
};

export interface IUserActionPayloadProps {
  type: string;
  payload: IUserState;
}
