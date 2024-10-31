import axios from "../utils/axiosCustomize";

const CreateNewUser = (email, password, username, role, image) => {
  // call api
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("v1/participant", data);
};

const getAllUser = () => {
  return axios.get("v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
  // call api
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("v1/participant", data);
};

const deleteUser = (userId) => {
  return axios.delete("v1/participant", { data: { id: userId } });
};

const getUserWithPaginate = (page, limit) => {
  return axios.get(`v1/participant?page=${page}&limit=${limit}`);
};

export {
  CreateNewUser,
  getAllUser,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
};
