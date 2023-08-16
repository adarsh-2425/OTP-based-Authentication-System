const randomstring = require("randomstring");

exports.generateOTP = () => {
  return randomstring.generate({
    length: 6,
    charset: "numeric"
  })
}
