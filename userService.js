const getAllUser = () => {
  return new Promise((fullfil, reject) => {
    setTimeout(() => {
      fullfil([{
        name: "Jorge",
        email: "jorge@encora.com",
        age: 24,
      },{
        name: "Pris",
        email: "pris@encora.com",
        age: 18,
      },{
        name: "Jhonatan",
        email: "jhonatan@encora.com",
        age: 27,
      },{
        name: "Elisa",
        email: "Elisa@encora.com",
        age: 27,
      }]);
    }, 500);
  });
};

const getAllUserWithError = () => {
  return new Promise((fullfil, reject) => {
    setTimeout(() => {
      reject({
        message: "User does not exists",
      });
    }, 500);
  });
};

export default {
  getAllUser,
  getAllUserWithError,
};
