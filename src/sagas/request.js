import api from "./../service/api";

export const getRequest = async (requestUrl) => {
  return new Promise((resolve, reject) => {
    api
      .get(requestUrl)
      .then((res) => {
        return resolve(res);
      })
      .catch((error) => {
        return resolve(error.responce);
      });
  });
};
