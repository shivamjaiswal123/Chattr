export interface User {
  _id: string;
  fullname: string;
  email: string;
}

export interface Response {
  success: boolean;
  message?: string;
  user?: User;
}
