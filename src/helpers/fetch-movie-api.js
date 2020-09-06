import api from "../services/callApi";

export const updateMovie = async (id, updatedInfo) => {
  await api(`movies/${id}`, "put", updatedInfo);
};

export const deleteMovie = async (id) => {
  await api(`movies/${id}`, "delete");
};
