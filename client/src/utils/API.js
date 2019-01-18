const axios = require("axios");

export default {
  userLogin: function(userCreds) {
    return axios.post("/api/auth/login", userCreds);
  },
  userSignup: function(userCreds) {
    return axios.post("/api/auth/signup", userCreds);
  }
};
