import api from "../services/callApi";

export const createNewUser = async (name, password) => {
  try {
    await api("users", "post", { name, password });
  } catch (e) {
    throw Error(e);
  }
};

export const getAllUsers = async () => {
  try {
    const { data } = await api("users");
    return data;
  } catch (e) {
    throw Error(e);
  }
};

export const fetchLoginUser = async (name, password) => {
  try {
    const user = await api(`users?name=${name}&password=${password}`);
    return user.data;
  } catch (e) {
    throw Error(e);
  }
};
