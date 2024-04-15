//// TODO:interface uSER

export interface IUser {
  name?: String;
  lastName?: String;
  age?: Number;
  phone?: String;
  address?: {
    street: String;
    number: Number;
  };
  email: String;
  password: String;
}
