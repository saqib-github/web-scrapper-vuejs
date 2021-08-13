/* eslint-disable no-unused-vars */
import axios from "axios";
export default {
  validURL: (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return pattern.test(str);
  },
  getData: async function(url, data_url) {
    return await axios
      .post(url, data_url)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });
  },
};
