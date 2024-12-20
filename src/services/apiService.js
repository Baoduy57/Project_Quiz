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

const postLogin = (userEmail, userPassword) => {
  return axios.post(`v1/login`, {
    email: userEmail,
    password: userPassword,
    delay: 3000,
  });
};

const postRegister = (userEmail, userPassword, username) => {
  return axios.post(`v1/register`, {
    email: userEmail,
    password: userPassword,
    username,
  });
};

const getQuizByUser = () => {
  return axios.get("v1/quiz-by-participant");
};

const getDataQuiz = (id) => {
  return axios.get(`v1/questions-by-quiz?quizId=${id}`);
};

const postSubmitQuiz = (data) => {
  return axios.post(`v1/quiz-submit`, { ...data });
};

const postCreateNewQuiz = (description, name, difficulty, image) => {
  const data = new FormData();
  data.append("description", description);
  data.append("name", name);
  data.append("difficulty", difficulty);
  data.append("quizImage", image);
  return axios.post(`v1/quiz`, data);
};

const getAllQuizForAdmin = () => {
  return axios.get(`v1/quiz/all`);
};

const putUpdateQuizForAdmin = (id, name, description, difficulty, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("description", description);
  data.append("name", name);
  data.append("difficulty", difficulty);
  data.append("quizImage", image);
  return axios.put("v1/quiz", data);
};

const deleteQuizForAdmin = (id) => {
  return axios.delete(`v1/quiz/${id}`);
};

const postCreateNewQuestionForQuiz = (quiz_id, description, image) => {
  const data = new FormData();
  data.append("quiz_id", quiz_id);
  data.append("description", description);
  data.append("questionImage", image);
  return axios.post("v1/question", data);
};

const postCreateNewAnswerForQuestion = (
  description,
  correct_answer,
  question_id
) => {
  return axios.post("v1/answer", {
    description,
    correct_answer,
    question_id,
  });
};

const Logout = (email, refresh_token) => {
  return axios.post("v1/logout", {
    email,
    refresh_token,
  });
};

const postAssignQuiz = (quizId, userId) => {
  return axios.post("v1/quiz-assign-to-user", {
    quizId,
    userId,
  });
};

const getQuizWithQA = (quizId) => {
  return axios.get(`v1/quiz-with-qa/${quizId}`);
};

const postUpsertQA = (data) => {
  return axios.post(`v1/quiz-upsert-qa`, {
    ...data,
  });
};

export {
  CreateNewUser,
  getAllUser,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
  getQuizByUser,
  getDataQuiz,
  postSubmitQuiz,
  postCreateNewQuiz,
  getAllQuizForAdmin,
  putUpdateQuizForAdmin,
  deleteQuizForAdmin,
  postCreateNewQuestionForQuiz,
  postCreateNewAnswerForQuestion,
  Logout,
  postAssignQuiz,
  getQuizWithQA,
  postUpsertQA,
};
