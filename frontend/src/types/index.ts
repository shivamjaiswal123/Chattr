export interface User {
  _id: string;
  fullname: string;
  email: string;
  password: string;
}

export interface Response {
  success: boolean;
  users: User[];
}
