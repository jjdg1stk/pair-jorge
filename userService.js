const getUser = () => {
  return new Promise((fullfil, reject) => {
    setTimeout(() => {
      fullfil({
        name: "Jorge",
        email: "jorge@encora.com",
        age: 24,
      });
    }, 500);
  });
};

const getUserWithError = () => {
  return new Promise((fullfil, reject) => {
    setTimeout(() => {
      reject({
        message: "User does not exists",
      });
    }, 500);
  });
};

export default {
  getUser,
  getUserWithError,
};
