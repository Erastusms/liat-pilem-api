const moment = require("moment");

const getToday = () => {
  return moment().format("YYYY-MM-DD HH:mm:ss");
};

module.exports = { getToday };
