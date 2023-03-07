import * as Utils from "./";
import * as Configs from "../config";

export const checkRequiredFields = (request, fields = []) => {
  return new Promise(async (resolve, reject) => {
    let missing = "";

    fields.map((field) => {
      if (!(field in request)) {
        missing += `${field} `;
      }
      return missing;
    });

    if (missing !== "") {
      return reject({ code: 401, msg: `${String(missing)}is missing` });
    }

    return resolve(true);
  });
};

export const checkRequiredEmailFields = (emails = []) => {
  return new Promise(async (resolve, reject) => {
    let invalid = "";

    emails.map((email) => {
      if (!Utils.validateEmail(email)) {
        invalid += `${email} `;
      }
      return invalid;
    });

    if (invalid !== "") {
      return reject({ code: 401, msg: `${String(invalid)}is invalid email.` });
    }

    return resolve(true);
  });
};

export const returnApiResponse = (req, res, message: Object, code = 200) => {
  res.status(code).json({
    success: code === 200,
    ...(req.jwt && { refreshToken: req.jwt || null }),
    ...message,
  });
};

export const returnCatchError = (e, res, req) => {
  let code = (e && e.code) || 500;
  let msg = (e && e.msg) || "Internal Server Error";
  return Utils.returnApiResponse(req, res, { message: msg }, code);
};
