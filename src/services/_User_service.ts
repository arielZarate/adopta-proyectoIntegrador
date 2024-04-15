import DB from "@/libs/DB";
import User from "@/models/User";
import { IUser } from "@/interfaces/IUser";
import { handlerError } from "@/utils/HandlerErros";
/**
 TODO: =======SERVICES USER========
 



   name: String;
  lastName: String;
  age: Number;
  phone: String;
  adress: {
    street: String;
    number: Number;
  };
  email: String;
  password: String;
 */

export const _get = async () => {
  try {
    DB();
    const listUsers = await User.find();

    return listUsers;
  } catch (error) {
    handlerError(error);
  }
};

export const _post = async (body: IUser) => {
  try {
    DB();
    const user_created = await User.create(body);

    return user_created;
  } catch (error) {
    handlerError(error);
  }
};

export const _getById = async (id: string) => {
  try {
    DB();
    const userFound = await User.findById(id);
    return userFound;
  } catch (error) {
    handlerError(error);
  }
};

export const _update = async (id: string, body: IUser) => {
  try {
    DB();
    const userUpdated = await User.findByIdAndUpdate(id, body, {
      new: true,
    });
    return userUpdated;
  } catch (error) {
    handlerError(error);
  }
};

export const _delete = async (id: string) => {
  try {
    DB();
    const userUpdated = await User.findByIdAndDelete(id);
    return userUpdated;
  } catch (error) {
    handlerError(error);
  }
};
