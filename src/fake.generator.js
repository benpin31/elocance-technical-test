const axios = require("axios");

const baseURL = "https://api.fungenerators.com";
const apiKey = "fZ7p5pEf0glWKgivryigMgeF";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "X-Fungenerators-Api-Secret": apiKey,
  },
});

async function getPhoneNumbers({ size }) {
  return axiosInstance
    .get("/identity/person/phonenumber", {
      params: { limit: size },
    })
    .then((result) => result.data)
    .catch((err) => console.log(err));
}

module.exports = {
  getPhoneNumbers,
};
