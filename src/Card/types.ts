export type Gender = "M" | "F";

export enum CountActionKind {
  GENERATE = "GENERATE",
  IS_LOADING = "IS_LOADING",
}

export interface IState {
  name: string;
  dateOfBirth: string;
  cpf: string;
  email: string;
  phone: string;
  gender: Gender;
  loading: boolean;
}

export interface IAction {
  type: CountActionKind;
}
