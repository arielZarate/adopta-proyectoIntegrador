import DB from "@/app/api/libs/DB";
import User from "@/app/api/models/User";
import { IUser } from "@/interfaces/IUser";
import { handlerError } from "@/app/api/utils/HandlerError";
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
    const listUsers = await User.find().populate("my_pets");

    return listUsers;
  } catch (error) {
    handlerError(error);
  }
};

export const _post = async (body: IUser | IUser[]) => {
  try {
    let user_created = null;
    DB();

    if (Array.isArray(body)) {
      user_created = await User.create(body);

      return user_created;
    } else {
      user_created = await User.create(body);

      return user_created;
    }
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
